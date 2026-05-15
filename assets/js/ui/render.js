(function registerUI(app) {
  var elements = {};

  function cacheElements() {
    elements.searchInput = document.getElementById("searchInput");
    elements.loadFolderButton = document.getElementById("loadFolderButton");
    elements.resetSourceButton = document.getElementById("resetSourceButton");
    elements.folderInput = document.getElementById("folderInput");
    elements.sourceLabel = document.getElementById("sourceLabel");
    elements.statusMessage = document.getElementById("statusMessage");
    elements.ignoredPanel = document.getElementById("ignoredPanel");
    elements.ignoredList = document.getElementById("ignoredList");
    elements.breadcrumbList = document.getElementById("breadcrumbList");
    elements.assignmentList = document.getElementById("assignmentList");
    elements.emptyState = document.getElementById("emptyState");
    elements.detailPanel = document.getElementById("detailPanel");
    elements.totalAssignments = document.getElementById("totalAssignments");
    elements.fileViewerModal = document.getElementById("fileViewerModal");
    elements.modalTitle = document.getElementById("modalTitle");
    elements.modalBody = document.getElementById("modalBody");
    elements.closeModalBtn = document.getElementById("closeModalBtn");
  }

  function bindEvents(handlers) {
    elements.searchInput.addEventListener("input", function handleInput(event) {
      handlers.onSearchChange(event.target.value);
    });

    elements.loadFolderButton.addEventListener("click", handlers.onLoadFolderRequest);
    elements.resetSourceButton.addEventListener("click", handlers.onResetSource);

    elements.folderInput.addEventListener("change", function handleFolderChange(event) {
      handlers.onFolderSelected(event.target.files);
      event.target.value = "";
    });

    elements.closeModalBtn.addEventListener("click", closeViewer);
    elements.fileViewerModal.addEventListener("click", function handleModalClick(event) {
      if (event.target === elements.fileViewerModal) {
        closeViewer();
      }
    });

    elements.assignmentList.addEventListener("click", function handleCardSelection(event) {
      var folder = event.target.closest("[data-folder-name]");
      if (folder) {
        handlers.onFolderNavigate(folder.getAttribute("data-folder-name"));
        return;
      }

      var card = event.target.closest("[data-assignment-id]");
      if (card) {
        event.preventDefault();
        handlers.onAssignmentSelect(card.getAttribute("data-assignment-id"));
      }
    });

    elements.breadcrumbList.addEventListener("click", function handleBreadcrumbSelection(event) {
      if (event.target.tagName === "BUTTON") {
        var index = parseInt(event.target.getAttribute("data-index"), 10);
        handlers.onBreadcrumbNavigate(index);
      }
    });
  }

  function createTag(text) {
    var tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = text;
    return tag;
  }

  function closeViewer() {
    elements.fileViewerModal.hidden = true;
    elements.modalBody.innerHTML = "";
  }

  function openViewer(assignment) {
    var ext = assignment.extension.toLowerCase();
    if (ext !== "pdf" && ext !== "docx") {
      window.open(assignment.href, "_blank");
      return;
    }

    elements.modalTitle.textContent = assignment.title || assignment.filename;
    elements.modalBody.innerHTML = "";
    elements.fileViewerModal.hidden = false;

    if (ext === "pdf") {
      var iframe = document.createElement("iframe");
      iframe.src = assignment.href;
      elements.modalBody.appendChild(iframe);
    } else if (ext === "docx") {
      var loading = document.createElement("p");
      loading.textContent = "Loading document...";
      loading.style.padding = "2rem";
      loading.style.textAlign = "center";
      elements.modalBody.appendChild(loading);

      fetch(assignment.href)
        .then(function(res) { return res.arrayBuffer(); })
        .then(function(data) {
          elements.modalBody.innerHTML = "";
          return docx.renderAsync(data, elements.modalBody);
        })
        .catch(function(err) {
          elements.modalBody.innerHTML = '<p style="padding: 2rem; color: red; text-align: center;">Failed to load document.</p>';
          console.error(err);
        });
    }
  }

  function renderBreadcrumbs(currentPath) {
    elements.breadcrumbList.innerHTML = "";
    
    var homeBtn = document.createElement("button");
    homeBtn.className = "breadcrumb-link";
    homeBtn.setAttribute("data-index", "-1");
    homeBtn.textContent = "Home";
    elements.breadcrumbList.appendChild(homeBtn);

    currentPath.forEach(function(folderName, index) {
      var separator = document.createElement("span");
      separator.className = "breadcrumb-separator";
      separator.textContent = " / ";
      elements.breadcrumbList.appendChild(separator);

      var btn = document.createElement("button");
      btn.className = "breadcrumb-link";
      btn.setAttribute("data-index", index);
      btn.textContent = folderName;
      elements.breadcrumbList.appendChild(btn);
    });
  }

  function renderItems(folders, files, selectedId) {
    elements.assignmentList.innerHTML = "";
    
    var hasItems = (folders.length + files.length) > 0;
    elements.emptyState.style.display = hasItems ? "none" : "grid";

    folders.forEach(function appendFolder(folder) {
      var btn = document.createElement("button");
      btn.className = "folder-card";
      btn.setAttribute("data-folder-name", folder.name);

      var icon = document.createElement("span");
      icon.className = "folder-icon";
      icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>';

      var title = document.createElement("span");
      title.className = "folder-title";
      title.textContent = folder.name;

      btn.appendChild(icon);
      btn.appendChild(title);
      elements.assignmentList.appendChild(btn);
    });

    files.forEach(function appendFile(file) {
      var card = document.createElement("a");
      card.className = "assignment-card" + (file.id === selectedId ? " is-active" : "");
      card.setAttribute("data-assignment-id", file.id);
      card.href = file.href;
      card.target = "_blank";
      card.rel = "noreferrer";

      var cardHeader = document.createElement("div");
      cardHeader.className = "assignment-card-header";

      var title = document.createElement("h3");
      title.textContent = file.title;

      var extensionTag = createTag(file.extension);
      cardHeader.appendChild(title);
      cardHeader.appendChild(extensionTag);

      var filename = document.createElement("p");
      filename.className = "assignment-filename";
      filename.textContent = file.filename;

      card.appendChild(cardHeader);
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
      placeholderKicker.textContent = "File details";

      var placeholderTitle = document.createElement("h3");
      placeholderTitle.textContent = "Select a file";

      var placeholderText = document.createElement("p");
      placeholderText.className = "detail-text";
      placeholderText.textContent = "Click a file to open it in a new tab and review its metadata here.";

      elements.detailPanel.appendChild(placeholderKicker);
      elements.detailPanel.appendChild(placeholderTitle);
      elements.detailPanel.appendChild(placeholderText);
      return;
    }

    var kicker = document.createElement("p");
    kicker.className = "detail-kicker";
    kicker.textContent = "File details";

    var title = document.createElement("h3");
    title.textContent = assignment.title;

    var description = document.createElement("p");
    description.className = "detail-text";
    description.textContent = assignment.description;

    var meta = document.createElement("div");
    meta.className = "detail-meta";
    
    var pathStr = assignment.pathParts.length > 1 ? assignment.pathParts.slice(0, -1).join(" / ") : "Root";
    meta.appendChild(createMetaItem("Location", pathStr));
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
    openLink.addEventListener("click", function(event) {
      var ext = assignment.extension.toLowerCase();
      if (ext === "pdf" || ext === "docx") {
        event.preventDefault();
        openViewer(assignment);
      }
    });

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
    elements.searchInput.value = state.filters.search;
    elements.sourceLabel.textContent = state.sourceLabel;
    elements.statusMessage.textContent = state.statusMessage;
    elements.totalAssignments.textContent = String(state.totalAssignments);
    elements.resetSourceButton.disabled = !state.canResetToManifest;

    renderBreadcrumbs(state.currentPath);
    renderItems(state.folders, state.files, state.selectedAssignmentId);
    renderDetail(state.selectedAssignment);
    renderIgnoredFiles(state.ignoredFiles);
  }

  app.ui = {
    cacheElements: cacheElements,
    bindEvents: bindEvents,
    render: render,
    openViewer: openViewer,
    closeViewer: closeViewer,
    openFolderPicker: function openFolderPicker() {
      elements.folderInput.click();
    }
  };
})(window.JUAssignmentsApp);
