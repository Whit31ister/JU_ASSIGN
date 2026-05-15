(function bootstrapAssignmentSite(app) {
  var state = {
    manifestAssignments: [],
    manifestIgnoredFiles: [],
    manifestStatusMessage: "",
    manifestReady: false,
    localObjectUrls: [],
    assignments: [],
    folders: [],
    files: [],
    ignoredFiles: [],
    selectedAssignmentId: "",
    selectedAssignment: null,
    currentPath: [],
    sourceLabel: "Checking manifest...",
    statusMessage: "Preparing the assignment library.",
    totalAssignments: 0,
    canResetToManifest: false,
    filters: {
      search: ""
    }
  };

  function releaseLocalObjectUrls() {
    state.localObjectUrls.forEach(function revoke(url) {
      URL.revokeObjectURL(url);
    });
    state.localObjectUrls = [];
  }

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

  function buildStatus(parts) {
    return parts.filter(Boolean).join(" ");
  }

  function applyManifestSource() {
    releaseLocalObjectUrls();
    state.assignments = state.manifestAssignments.slice();
    state.ignoredFiles = state.manifestIgnoredFiles.slice();
    state.sourceLabel = state.manifestReady ? "Site manifest" : "Manifest unavailable";
    state.statusMessage = state.manifestStatusMessage;
    state.currentPath = [];
    refreshView();
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
      if (ext === "pdf" || ext === "docx") {
        app.ui.openViewer(state.selectedAssignment);
      }
    }
  }

  function handleFolderSelected(fileList) {
    releaseLocalObjectUrls();
    var parsed = app.parser.parseLocalFiles(fileList);
    state.localObjectUrls = parsed.objectUrls;
    state.assignments = parsed.assignments.slice();
    state.ignoredFiles = parsed.ignored.slice();
    state.sourceLabel = "Local folder";
    state.statusMessage = buildStatus([
      parsed.assignments.length ? parsed.assignments.length + " files loaded." : "",
      parsed.ignored.length ? parsed.ignored.length + " hidden/system files ignored." : "",
      !parsed.assignments.length && !parsed.ignored.length ? "No files were selected." : ""
    ]);
    state.selectedAssignmentId = "";
    state.currentPath = [];
    refreshView();
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
      onLoadFolderRequest: app.ui.openFolderPicker,
      onResetSource: applyManifestSource,
      onFolderSelected: handleFolderSelected,
      onAssignmentSelect: handleAssignmentSelect,
      onFolderNavigate: handleFolderNavigate,
      onBreadcrumbNavigate: handleBreadcrumbNavigate
    });

    var themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      function updateToggleText() {
        var isDark = document.documentElement.classList.contains("dark");
        themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
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

    state.manifestAssignments = manifestResult.assignments.slice();
    state.manifestIgnoredFiles = manifestResult.ignored.slice();
    state.manifestReady = !manifestResult.errorMessage;
    state.manifestStatusMessage = buildStatus([
      manifestResult.assignments.length ? manifestResult.assignments.length + " files are listed in the manifest." : "",
      manifestResult.errorMessage
    ]);
    state.canResetToManifest = state.manifestReady || !!state.manifestStatusMessage;

    applyManifestSource();
  }

  window.addEventListener("beforeunload", releaseLocalObjectUrls);
  document.addEventListener("DOMContentLoaded", initialise);
})(window.JUAssignmentsApp);
