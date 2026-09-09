(function bootstrapAssignmentSite(app) {
  var state = {
    assignments: [],
    folders: [],
    files: [],
    selectedAssignmentId: "",
    selectedAssignment: null,
    currentPath: [],
    totalAssignments: 0,
    filters: {
      search: ""
    }
  };

  function filterAssignments() {
    var searchTerm = state.filters.search.trim().toLowerCase();

    if (searchTerm) {
      state.files = state.assignments.filter(function matchesSearch(assignment) {
        return assignment.filename.toLowerCase().indexOf(searchTerm) >= 0 ||
               assignment.path.toLowerCase().indexOf(searchTerm) >= 0;
      }).sort(function sortByTitle(a, b) {
        return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" });
      });
      state.folders = [];
    } else {
      var depth = state.currentPath.length;
      var folderSet = {};
      var files = [];

      state.assignments.forEach(function(assignment) {
        var matchesPath = true;
        for (var i = 0; i < depth; i++) {
          if (assignment.pathParts[i] !== state.currentPath[i]) {
            matchesPath = false;
            break;
          }
        }

        if (matchesPath) {
          if (assignment.pathParts.length > depth + 1) {
            var folderName = assignment.pathParts[depth];
            folderSet[folderName] = true;
          } else if (assignment.pathParts.length === depth + 1) {
            files.push(assignment);
          }
        }
      });

      state.folders = Object.keys(folderSet).sort(function sortByName(a, b) {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
      }).map(function(name) {
        return {
          type: 'folder',
          name: name,
          path: state.currentPath.concat(name)
        };
      });
      state.files = files.sort(function sortByTitle(a, b) {
        return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" });
      });
    }
  }

  function syncSelection() {
    var selected = state.files.find(function findSelected(assignment) {
      return assignment.id === state.selectedAssignmentId;
    });

    if (!selected) {
      selected = state.files[0] || null;
      state.selectedAssignmentId = selected ? selected.id : "";
    }
    state.selectedAssignment = selected;
  }

  function computeTotals() {
    state.totalAssignments = state.assignments.length;
  }

  function refreshView() {
    filterAssignments();
    syncSelection();
    computeTotals();
    app.ui.render(state);
  }

  function handleSearchChange(value) {
    state.filters.search = value;
    refreshView();
  }

  function handleFolderNavigate(folderName) {
    state.currentPath.push(folderName);
    state.selectedAssignmentId = "";
    refreshView();
  }

  function handleBreadcrumbNavigate(index) {
    if (index === -1) {
      state.currentPath = [];
    } else {
      state.currentPath = state.currentPath.slice(0, index + 1);
    }
    state.selectedAssignmentId = "";
    refreshView();
  }

  function handleAssignmentSelect(assignmentId) {
    state.selectedAssignmentId = assignmentId;
    syncSelection();
    app.ui.render(state);

    if (state.selectedAssignment) {
      var ext = state.selectedAssignment.extension.toLowerCase();
      if (ext === "pdf" || ext === "docx" || ext === "md") {
        app.ui.openViewer(state.selectedAssignment);
      }
    }
  }

  async function fetchContributors() {
    try {
      if (!app.config.contributors || !app.config.contributors.length) return;
      
      var container = document.getElementById("contributorsList");
      if (!container) return;
      
      var fragment = document.createDocumentFragment();
      
      var promises = app.config.contributors.map(function(username) {
        return fetch("https://api.github.com/users/" + username)
          .then(function(res) { return res.ok ? res.json() : null; })
          .catch(function() { return null; });
      });
      
      var users = await Promise.all(promises);
      
      users.forEach(function(c) {
        if (!c || c.type !== 'User') return;
        var a = document.createElement("a");
        a.href = c.html_url;
        a.target = "_blank";
        a.title = c.name || c.login;
        
        var img = document.createElement("img");
        img.src = c.avatar_url;
        img.alt = c.name || c.login;
        img.className = "contributor-avatar";
        img.loading = "lazy";
        
        a.appendChild(img);
        fragment.appendChild(a);
      });
      container.appendChild(fragment);
    } catch (e) {
      console.warn("Could not load contributors.", e);
    }
  }

  async function initialise() {
    app.ui.cacheElements();
    app.ui.bindEvents({
      onSearchChange: handleSearchChange,
      onAssignmentSelect: handleAssignmentSelect,
      onFolderNavigate: handleFolderNavigate,
      onBreadcrumbNavigate: handleBreadcrumbNavigate
    });

    var searchInput = document.getElementById("searchInput");
    var clearSearchBtn = document.getElementById("clearSearchBtn");

    if (searchInput && clearSearchBtn) {
      function syncClearButton() {
        clearSearchBtn.hidden = !searchInput.value;
      }
      searchInput.addEventListener("input", syncClearButton);
      clearSearchBtn.addEventListener("click", function() {
        searchInput.value = "";
        syncClearButton();
        searchInput.focus();
        handleSearchChange("");
      });
    }

    // Keyboard shortcut to focus search: press '/' or 'Ctrl+K' / 'Cmd+K'
    window.addEventListener("keydown", function(event) {
      if (event.key === "/" && document.activeElement !== searchInput && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement && document.activeElement.tagName)) {
        event.preventDefault();
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      } else if (event.key === "Escape" && document.activeElement === searchInput) {
        if (searchInput) {
          searchInput.blur();
        }
      }
    });

    var themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      function updateToggleText() {
        var isDark = document.documentElement.classList.contains("dark");
        var label = themeToggle.querySelector(".theme-label");
        if (label) {
          label.textContent = isDark ? "Light Mode" : "Dark Mode";
        } else {
          themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
        }
      }
      updateToggleText();
      themeToggle.addEventListener("click", function() {
        document.documentElement.classList.toggle("dark");
        var isDark = document.documentElement.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateToggleText();
      });
    }

    fetchContributors();

    var manifestResult = await app.catalog.loadManifest();
    state.assignments = manifestResult.assignments.slice();
    state.currentPath = [];
    refreshView();
  }

  document.addEventListener("DOMContentLoaded", initialise);
})(window.JUAssignmentsApp);
