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

  function compareCode(left, right) {
    var leftValue = String(left);
    var rightValue = String(right);
    var leftNumber = Number(leftValue);
    var rightNumber = Number(rightValue);
    var leftNumeric = Number.isFinite(leftNumber) && leftValue.trim() !== "";
    var rightNumeric = Number.isFinite(rightNumber) && rightValue.trim() !== "";

    if (leftNumeric && rightNumeric) {
      return leftNumber - rightNumber;
    }

    return leftValue.localeCompare(rightValue, undefined, { numeric: true, sensitivity: "base" });
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

  function formatSemesterLabel(rawSemester) {
    var cleaned = String(rawSemester).replace(/[-_]+/g, " ").trim();

    if (/^\d+$/.test(cleaned)) {
      return "Semester " + cleaned;
    }

    if (/^sem(?:ester)?\s*\d+$/i.test(cleaned)) {
      return cleaned.replace(/^sem(?:ester)?\s*/i, "Semester ");
    }

    return titleiseToken(cleaned);
  }

  function formatFileSize(bytes) {
    if (!bytes) {
      return "";
    }

    var sizes = ["B", "KB", "MB", "GB"];
    var index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1);
    var sizeValue = bytes / Math.pow(1024, index);
    var precision = sizeValue >= 10 || index === 0 ? 0 : 1;

    return sizeValue.toFixed(precision) + " " + sizes[index];
  }

  function createRecord(baseEntry, href) {
    var path = baseEntry.path;
    var filename = path.split("/").pop();
    var match = filename.match(app.config.filenamePattern);

    if (!match) {
      return null;
    }

    var semesterCode = match[1];
    var subjectCode = match[2];
    var assignmentNumber = match[3];
    var extension = match[4].toUpperCase();

    return {
      id: [semesterCode, subjectCode, assignmentNumber, path].join("::"),
      path: path,
      href: href || path,
      filename: filename,
      title: baseEntry.title || "Assignment " + assignmentNumber,
      description: baseEntry.description || "Open the file to read the full assignment brief.",
      semesterCode: semesterCode,
      semesterLabel: formatSemesterLabel(semesterCode),
      subjectCode: subjectCode,
      subjectLabel: titleiseToken(subjectCode),
      assignmentNumber: assignmentNumber,
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

      if (!normalisedEntry) {
        return;
      }

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
    return assignments.slice().sort(function sortByNaming(left, right) {
      return (
        compareCode(left.semesterCode, right.semesterCode) ||
        left.subjectLabel.localeCompare(right.subjectLabel, undefined, { sensitivity: "base" }) ||
        compareCode(left.assignmentNumber, right.assignmentNumber) ||
        left.filename.localeCompare(right.filename, undefined, { sensitivity: "base" })
      );
    });
  }

  app.parser = {
    parseManifestEntries: parseManifestEntries,
    parseLocalFiles: parseLocalFiles
  };
})(window.JUAssignmentsApp);
