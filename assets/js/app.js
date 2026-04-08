(function bootstrapAssignmentSite(app) {
  var state = {
    manifestAssignments: [],
    manifestIgnoredFiles: [],
    manifestStatusMessage: "",
    manifestReady: false,
    localObjectUrls: [],
    assignments: [],
    filteredAssignments: [],
    ignoredFiles: [],
    selectedAssignmentId: "",
    selectedAssignment: null,
    semesterOptions: [],
    subjectOptions: [],
    sourceLabel: "Checking manifest...",
    statusMessage: "Preparing the assignment library.",
    resultsSummary: "0 assignments visible",
    totalAssignments: 0,
    totalSubjects: 0,
    totalSemesters: 0,
    canResetToManifest: false,
    filters: {
      search: "",
      semester: "all",
      subject: "all"
    }
  };

  function compareOptionValue(left, right) {
    var leftNumber = Number(left.value);
    var rightNumber = Number(right.value);
    var leftNumeric = Number.isFinite(leftNumber) && left.value.trim() !== "";
    var rightNumeric = Number.isFinite(rightNumber) && right.value.trim() !== "";

    if (leftNumeric && rightNumeric) {
      return leftNumber - rightNumber;
    }

    return left.label.localeCompare(right.label, undefined, { numeric: true, sensitivity: "base" });
  }

  function releaseLocalObjectUrls() {
    state.localObjectUrls.forEach(function revoke(url) {
      URL.revokeObjectURL(url);
    });

    state.localObjectUrls = [];
  }

  function getUniqueOptions(assignments, key, labelKey) {
    var seen = {};
    var options = [];

    assignments.forEach(function collectOptions(assignment) {
      if (seen[assignment[key]]) {
        return;
      }

      seen[assignment[key]] = true;
      options.push({
        value: assignment[key],
        label: assignment[labelKey]
      });
    });

    return options.sort(compareOptionValue);
  }

  function ensureValidFilters() {
    var semesterExists = state.semesterOptions.some(function matchOption(option) {
      return option.value === state.filters.semester;
    });
    var subjectExists = state.subjectOptions.some(function matchOption(option) {
      return option.value === state.filters.subject;
    });

    if (!semesterExists) {
      state.filters.semester = "all";
    }

    if (!subjectExists) {
      state.filters.subject = "all";
    }
  }

  function filterAssignments() {
    var searchTerm = state.filters.search.trim().toLowerCase();

    state.filteredAssignments = state.assignments.filter(function matchesFilters(assignment) {
      var matchesSemester = state.filters.semester === "all" || assignment.semesterCode === state.filters.semester;
      var matchesSubject = state.filters.subject === "all" || assignment.subjectCode === state.filters.subject;
      var matchesSearch =
        !searchTerm ||
        assignment.title.toLowerCase().indexOf(searchTerm) >= 0 ||
        assignment.subjectLabel.toLowerCase().indexOf(searchTerm) >= 0 ||
        assignment.filename.toLowerCase().indexOf(searchTerm) >= 0;

      return matchesSemester && matchesSubject && matchesSearch;
    });
  }

  function syncSelection() {
    var selected = state.filteredAssignments.find(function findSelected(assignment) {
      return assignment.id === state.selectedAssignmentId;
    });

    if (!selected) {
      selected = state.filteredAssignments[0] || null;
      state.selectedAssignmentId = selected ? selected.id : "";
    }

    state.selectedAssignment = selected;
  }

  function buildResultsSummary() {
    if (!state.assignments.length) {
      return "No assignments available";
    }

    return state.filteredAssignments.length + " of " + state.assignments.length + " assignments visible";
  }

  function computeTotals() {
    state.totalAssignments = state.assignments.length;
    state.totalSubjects = state.subjectOptions.length;
    state.totalSemesters = state.semesterOptions.length;
    state.resultsSummary = buildResultsSummary();
  }

  function refreshView() {
    state.semesterOptions = getUniqueOptions(state.assignments, "semesterCode", "semesterLabel");
    state.subjectOptions = getUniqueOptions(state.assignments, "subjectCode", "subjectLabel");
    ensureValidFilters();
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
    refreshView();
  }

  function handleSearchChange(value) {
    state.filters.search = value;
    refreshView();
  }

  function handleSemesterChange(value) {
    state.filters.semester = value;
    refreshView();
  }

  function handleSubjectChange(value) {
    state.filters.subject = value;
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
    state.sourceLabel = "Local assignments folder";
    state.statusMessage = buildStatus([
      parsed.assignments.length ? parsed.assignments.length + " assignment files loaded from the selected folder." : "",
      parsed.ignored.length ? parsed.ignored.length + " files were ignored because they do not follow " + app.config.namingPattern + "." : "",
      !parsed.assignments.length && !parsed.ignored.length ? "No files were selected." : ""
    ]);
    state.selectedAssignmentId = "";
    refreshView();
  }

  async function initialise() {
    app.ui.cacheElements();
    app.ui.bindEvents({
      onSearchChange: handleSearchChange,
      onSemesterChange: handleSemesterChange,
      onSubjectChange: handleSubjectChange,
      onLoadFolderRequest: app.ui.openFolderPicker,
      onResetSource: applyManifestSource,
      onFolderSelected: handleFolderSelected,
      onAssignmentSelect: handleAssignmentSelect
    });

    var manifestResult = await app.catalog.loadManifest();

    state.manifestAssignments = manifestResult.assignments.slice();
    state.manifestIgnoredFiles = manifestResult.ignored.slice();
    state.manifestReady = !manifestResult.errorMessage;
    state.manifestStatusMessage = buildStatus([
      manifestResult.assignments.length ? manifestResult.assignments.length + " assignment files are listed in assignments/manifest.json." : "",
      manifestResult.ignored.length ? manifestResult.ignored.length + " manifest entries were ignored because they do not follow " + app.config.namingPattern + "." : "",
      !manifestResult.assignments.length && !manifestResult.ignored.length && !manifestResult.errorMessage ? "Manifest loaded. Add file entries to assignments/manifest.json when you are ready to publish assignments." : "",
      manifestResult.errorMessage
    ]);
    state.canResetToManifest = state.manifestReady || !!state.manifestStatusMessage;

    applyManifestSource();
  }

  window.addEventListener("beforeunload", releaseLocalObjectUrls);
  document.addEventListener("DOMContentLoaded", initialise);
})(window.JUAssignmentsApp);
