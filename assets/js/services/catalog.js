(function registerCatalogService(app) {
  function createResult(assignments, ignored, errorMessage) {
    return {
      assignments: assignments,
      ignored: ignored,
      errorMessage: errorMessage || ""
    };
  }

  async function loadManifest() {
    try {
      var response = await fetch(app.config.manifestPath, { cache: "no-store" });

      if (!response.ok) {
        if (response.status === 404) {
          return createResult([], [], "No assignments/manifest.json file was found yet.");
        }

        return createResult([], [], "Manifest request failed with status " + response.status + ".");
      }

      var payload = await response.json();
      var entries = Array.isArray(payload.files) ? payload.files : [];
      var parsed = app.parser.parseManifestEntries(entries);

      return createResult(parsed.assignments, parsed.ignored, "");
    } catch (error) {
      if (window.location.protocol === "file:") {
        return createResult([], [], "Manifest loading is blocked on file://. Use a local server or load the folder manually.");
      }

      return createResult([], [], "Manifest could not be loaded.");
    }
  }

  app.catalog = {
    loadManifest: loadManifest
  };
})(window.JUAssignmentsApp);
