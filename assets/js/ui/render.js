(function registerUI(app) {
  var elements = {};

  function cacheElements() {
    elements.searchInput = document.getElementById("searchInput");
    elements.semesterFilter = document.getElementById("semesterFilter");
    elements.subjectFilter = document.getElementById("subjectFilter");
    elements.loadFolderButton = document.getElementById("loadFolderButton");
    elements.resetSourceButton = document.getElementById("resetSourceButton");
    elements.folderInput = document.getElementById("folderInput");
    elements.sourceLabel = document.getElementById("sourceLabel");
    elements.statusMessage = document.getElementById("statusMessage");
    elements.ignoredPanel = document.getElementById("ignoredPanel");
    elements.ignoredList = document.getElementById("ignoredList");
    elements.resultsSummary = document.getElementById("resultsSummary");
    elements.assignmentList = document.getElementById("assignmentList");
    elements.emptyState = document.getElementById("emptyState");
    elements.detailPanel = document.getElementById("detailPanel");
    elements.totalAssignments = document.getElementById("totalAssignments");
    elements.totalSubjects = document.getElementById("totalSubjects");
    elements.totalSemesters = document.getElementById("totalSemesters");
  }

  function bindEvents(handlers) {
    elements.searchInput.addEventListener("input", function handleInput(event) {
      handlers.onSearchChange(event.target.value);
    });

    elements.semesterFilter.addEventListener("change", function handleSemesterChange(event) {
      handlers.onSemesterChange(event.target.value);
    });

    elements.subjectFilter.addEventListener("change", function handleSubjectChange(event) {
      handlers.onSubjectChange(event.target.value);
    });

    elements.loadFolderButton.addEventListener("click", handlers.onLoadFolderRequest);
    elements.resetSourceButton.addEventListener("click", handlers.onResetSource);

    elements.folderInput.addEventListener("change", function handleFolderChange(event) {
      handlers.onFolderSelected(event.target.files);
      event.target.value = "";
    });

    elements.assignmentList.addEventListener("click", function handleCardSelection(event) {
      var card = event.target.closest("[data-assignment-id]");

      if (!card) {
        return;
      }

      handlers.onAssignmentSelect(card.getAttribute("data-assignment-id"));
    });
  }

  function populateSelect(selectElement, options, currentValue, allLabel) {
    selectElement.innerHTML = "";

    var defaultOption = document.createElement("option");
    defaultOption.value = "all";
    defaultOption.textContent = allLabel;
    selectElement.appendChild(defaultOption);

    options.forEach(function appendOption(option) {
      var optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.label;
      selectElement.appendChild(optionElement);
    });

    selectElement.value = currentValue;
  }

  function createTag(text) {
    var tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = text;
    return tag;
  }

  function renderAssignments(assignments, selectedId) {
    elements.assignmentList.innerHTML = "";
    elements.emptyState.hidden = assignments.length > 0;

    assignments.forEach(function appendAssignment(assignment) {
      var card = document.createElement("a");
      card.className = "assignment-card" + (assignment.id === selectedId ? " is-active" : "");
      card.setAttribute("data-assignment-id", assignment.id);
      card.href = assignment.href;
      card.target = "_blank";
      card.rel = "noreferrer";

      var cardHeader = document.createElement("div");
      cardHeader.className = "assignment-card-header";

      var title = document.createElement("h3");
      title.textContent = assignment.title;

      var extensionTag = createTag(assignment.extension);
      cardHeader.appendChild(title);
      cardHeader.appendChild(extensionTag);

      var description = document.createElement("p");
      description.className = "assignment-description";
      description.textContent = assignment.description;

      var tags = document.createElement("div");
      tags.className = "assignment-tags";
      tags.appendChild(createTag(assignment.semesterLabel));
      tags.appendChild(createTag(assignment.subjectLabel));
      tags.appendChild(createTag("No. " + assignment.assignmentNumber));

      var filename = document.createElement("p");
      filename.className = "assignment-filename";
      filename.textContent = assignment.filename;

      card.appendChild(cardHeader);
      card.appendChild(description);
      card.appendChild(tags);
      card.appendChild(filename);
      elements.assignmentList.appendChild(card);
    });
  }

  function createMetaItem(label, value) {
    var item = document.createElement("div");
    item.className = "meta-item";

    var title = document.createElement("span");
    title.className = "meta-label";
    title.textContent = label;

    var content = document.createElement("strong");
    content.textContent = value;

    item.appendChild(title);
    item.appendChild(content);

    return item;
  }

  function renderDetail(assignment) {
    elements.detailPanel.innerHTML = "";

    if (!assignment) {
      var placeholderKicker = document.createElement("p");
      placeholderKicker.className = "detail-kicker";
      placeholderKicker.textContent = "Assignment details";

      var placeholderTitle = document.createElement("h3");
      placeholderTitle.textContent = "Open an assignment";

      var placeholderText = document.createElement("p");
      placeholderText.className = "detail-text";
      placeholderText.textContent = "Click an assignment card to open the file in a new tab and review its metadata here.";

      elements.detailPanel.appendChild(placeholderKicker);
      elements.detailPanel.appendChild(placeholderTitle);
      elements.detailPanel.appendChild(placeholderText);
      return;
    }

    var kicker = document.createElement("p");
    kicker.className = "detail-kicker";
    kicker.textContent = "Assignment details";

    var title = document.createElement("h3");
    title.textContent = assignment.title;

    var description = document.createElement("p");
    description.className = "detail-text";
    description.textContent = assignment.description;

    var meta = document.createElement("div");
    meta.className = "detail-meta";
    meta.appendChild(createMetaItem("Semester", assignment.semesterLabel));
    meta.appendChild(createMetaItem("Subject", assignment.subjectLabel));
    meta.appendChild(createMetaItem("Assignment", "No. " + assignment.assignmentNumber));
    meta.appendChild(createMetaItem("File type", assignment.extension));
    meta.appendChild(createMetaItem("File name", assignment.filename));

    if (assignment.sizeLabel) {
      meta.appendChild(createMetaItem("Approx. size", assignment.sizeLabel));
    }

    var actions = document.createElement("div");
    actions.className = "detail-actions";

    var openLink = document.createElement("a");
    openLink.className = "action-link primary";
    openLink.href = assignment.href;
    openLink.target = "_blank";
    openLink.rel = "noreferrer";
    openLink.textContent = "Open file";

    var downloadLink = document.createElement("a");
    downloadLink.className = "action-link secondary";
    downloadLink.href = assignment.href;
    downloadLink.setAttribute("download", assignment.filename);
    downloadLink.textContent = "Download";

    actions.appendChild(openLink);
    actions.appendChild(downloadLink);

    elements.detailPanel.appendChild(kicker);
    elements.detailPanel.appendChild(title);
    elements.detailPanel.appendChild(description);
    elements.detailPanel.appendChild(meta);
    elements.detailPanel.appendChild(actions);
  }

  function renderIgnoredFiles(ignoredFiles) {
    elements.ignoredList.innerHTML = "";
    elements.ignoredPanel.hidden = ignoredFiles.length === 0;

    ignoredFiles.forEach(function appendIgnoredFile(fileName) {
      var item = document.createElement("li");
      item.textContent = fileName;
      elements.ignoredList.appendChild(item);
    });
  }

  function render(state) {
    populateSelect(elements.semesterFilter, state.semesterOptions, state.filters.semester, "All semesters");
    populateSelect(elements.subjectFilter, state.subjectOptions, state.filters.subject, "All subjects");

    elements.searchInput.value = state.filters.search;
    elements.sourceLabel.textContent = state.sourceLabel;
    elements.statusMessage.textContent = state.statusMessage;
    elements.resultsSummary.textContent = state.resultsSummary;
    elements.totalAssignments.textContent = String(state.totalAssignments);
    elements.totalSubjects.textContent = String(state.totalSubjects);
    elements.totalSemesters.textContent = String(state.totalSemesters);
    elements.resetSourceButton.disabled = !state.canResetToManifest;

    renderAssignments(state.filteredAssignments, state.selectedAssignmentId);
    renderDetail(state.selectedAssignment);
    renderIgnoredFiles(state.ignoredFiles);
  }

  app.ui = {
    cacheElements: cacheElements,
    bindEvents: bindEvents,
    render: render,
    openFolderPicker: function openFolderPicker() {
      elements.folderInput.click();
    }
  };
})(window.JUAssignmentsApp);
