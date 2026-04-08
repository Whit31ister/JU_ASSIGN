window.JUAssignmentsApp = window.JUAssignmentsApp || {};

(function registerConfig(app) {
  app.config = {
    manifestPath: "assignments/manifest.json",
    filenamePattern: /^([a-zA-Z0-9-]+)_([a-zA-Z0-9-]+)_assignment_([a-zA-Z0-9-]+)\.([a-z0-9]+)$/i,
    namingPattern: "sem_sub_assignment_no.ext",
    namingExample: "3_dbms_assignment_2.pdf",
    acronymTokens: ["ai", "cn", "coa", "css", "daa", "dbms", "dsa", "ml", "oops", "os", "ui", "ux"]
  };
})(window.JUAssignmentsApp);
