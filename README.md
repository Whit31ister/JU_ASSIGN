# JU Assignments

Clean static website for browsing assignment files by semester and subject.

## Project structure

```text
.
├── assets
│   ├── css
│   │   ├── base.css
│   │   ├── components.css
│   │   └── layout.css
│   └── js
│       ├── app.js
│       ├── core
│       │   ├── config.js
│       │   └── parser.js
│       ├── services
│       │   └── catalog.js
│       └── ui
│           └── render.js
├── assignments
│   └── manifest.json
└── index.html
```

## Assignment naming

Put assignment files inside `assignments/` with this format:

```text
sem_sub_assignment_no.ext
```

Examples:

- `1_dsa_assignment_1.pdf`
- `3_dbms_assignment_2.docx`
- `5_machine-learning_assignment_4.zip`

The website reads:

- `sem` as the semester
- `sub` as the subject code/name
- `no` as the assignment number
- `ext` as the file type

## Publishing workflow

1. Add the assignment files to `assignments/`.
2. Add the same file paths to `assignments/manifest.json`.
3. Serve the project through any local/static server.

Example manifest entry:

```json
{
  "files": [
    {
      "path": "assignments/3_dbms_assignment_2.pdf",
      "description": "Normalization and SQL practice set."
    }
  ]
}
```

## Local preview workflow

If you open `index.html` directly from the filesystem, browsers usually block `manifest.json` fetches. In that case:

1. Open the page.
2. Click `Load assignments folder`.
3. Select the local `assignments/` directory.

That mode reads local files without changing the project.
