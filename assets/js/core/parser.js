(function registerParser(app) {
  function normaliseEntry(entry) {
    if (typeof entry === "string") {
      return { path: entry };
    }
    if (entry && typeof entry === "object" && typeof entry.path === "string") {
      return entry;
    }
    return null;
  }

  function titleiseToken(token) {
    return token
      .split(/[-_]+/)
      .filter(Boolean)
      .map(function mapPart(part) {
        var lower = part.toLowerCase();
        if (app.config.acronymTokens.indexOf(lower) >= 0 || lower.length <= 4) {
          return lower.toUpperCase();
        }
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      })
      .join(" ");
  }

  function createRecord(baseEntry, href) {
    var fullPath = baseEntry.path.replace(/\\/g, '/');
    
    if (fullPath.startsWith("assignments/")) {
      fullPath = fullPath.substring("assignments/".length);
    }
    
    if (fullPath === "manifest.json" || fullPath.endsWith("/manifest.json")) {
      return null;
    }

    var pathParts = fullPath.split("/").filter(Boolean);
    if (pathParts.length === 0) return null;

    var filename = pathParts[pathParts.length - 1];
    
    if (filename.startsWith(".")) {
      return null;
    }

    var extensionMatch = filename.match(/\.([a-z0-9]+)$/i);
    var extension = extensionMatch ? extensionMatch[1].toUpperCase() : "FILE";
    var title = baseEntry.title || titleiseToken(filename.replace(/\.[^/.]+$/, ""));

    return {
      id: fullPath,
      path: fullPath,
      pathParts: pathParts,
      href: href || baseEntry.path,
      filename: filename,
      title: title,
      description: baseEntry.description || "",
      extension: extension,
      sizeLabel: baseEntry.sizeLabel || "",
      sourceType: baseEntry.sourceType || "manifest"
    };
  }

  function parseManifestEntries(entries) {
    var assignments = [];
    var ignored = [];

    (entries || []).forEach(function parseEntry(entry) {
      var normalisedEntry = normaliseEntry(entry);
      if (!normalisedEntry) return;

      var record = createRecord(normalisedEntry, normalisedEntry.path);
      if (!record) {
        ignored.push(normalisedEntry.path);
        return;
      }
      assignments.push(record);
    });

    return {
      assignments: sortAssignments(assignments),
      ignored: ignored.sort()
    };
  }

  function sortAssignments(assignments) {
    return assignments.slice().sort(function sortByPath(left, right) {
      return left.path.localeCompare(right.path, undefined, { sensitivity: "base" });
    });
  }

  app.parser = {
    parseManifestEntries: parseManifestEntries
  };
})(window.JUAssignmentsApp);
