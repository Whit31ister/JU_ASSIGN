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

  function formatFileSize(bytes) {
    if (!bytes) return "";
    var sizes = ["B", "KB", "MB", "GB"];
    var index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1);
    var sizeValue = bytes / Math.pow(1024, index);
    var precision = sizeValue >= 10 || index === 0 ? 0 : 1;
    return sizeValue.toFixed(precision) + " " + sizes[index];
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
    
    // Strip leading assignments/ or other root folders when loading local folder
    if (fullPath.startsWith("assignments/")) {
      fullPath = fullPath.substring("assignments/".length);
    }
    
    // Ignore manifest itself
    if (fullPath === "manifest.json" || fullPath.endsWith("/manifest.json")) {
      return null;
    }

    var pathParts = fullPath.split("/").filter(Boolean);
    if (pathParts.length === 0) return null;

    var filename = pathParts[pathParts.length - 1];
    
    // Check if it is a hidden file
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

  function parseLocalFiles(fileList) {
    var assignments = [];
    var ignored = [];
    var objectUrls = [];

    Array.from(fileList || []).forEach(function parseFile(file) {
      var path = file.webkitRelativePath || file.name;
      var href = URL.createObjectURL(file);
      var record = createRecord(
        {
          path: path,
          title: "",
          description: "",
          sizeLabel: formatFileSize(file.size),
          sourceType: "local"
        },
        href
      );

      if (!record) {
        ignored.push(path);
        URL.revokeObjectURL(href);
        return;
      }

      assignments.push(record);
      objectUrls.push(href);
    });

    return {
      assignments: sortAssignments(assignments),
      ignored: ignored.sort(),
      objectUrls: objectUrls
    };
  }

  function sortAssignments(assignments) {
    return assignments.slice().sort(function sortByPath(left, right) {
      return left.path.localeCompare(right.path, undefined, { sensitivity: "base" });
    });
  }

  app.parser = {
    parseManifestEntries: parseManifestEntries,
    parseLocalFiles: parseLocalFiles
  };
})(window.JUAssignmentsApp);
