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

      state.folders = Object.keys(folderSet).sort().map(function(name) {
        return {
          type: 'folder',
          name: name,
          path: state.currentPath.concat(name)
        };
      });
      state.files = files;
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
