const assignmentData = {
  "Data Structures": {
    "Semester 1": [
      {
        title: "Assignment 1",
        topic: "Arrays and Linked Lists",
        description: "Practice basic operations, insertion, deletion, and traversal questions.",
        link: "#"
      },
      {
        title: "Assignment 2",
        topic: "Stacks and Queues",
        description: "Solve implementation and application-based stack and queue problems.",
        link: "#"
      }
    ],
    "Semester 2": [
      {
        title: "Assignment 3",
        topic: "Trees",
        description: "Binary tree traversal, BST construction, and height calculations.",
        link: "#"
      }
    ]
  },
  "Operating Systems": {
    "Semester 1": [
      {
        title: "Assignment 1",
        topic: "Processes and Threads",
        description: "Explain process states, context switching, and thread models.",
        link: "#"
      }
    ],
    "Semester 2": [
      {
        title: "Assignment 2",
        topic: "CPU Scheduling",
        description: "Compare FCFS, SJF, Round Robin, and Priority Scheduling with examples.",
        link: "#"
      },
      {
        title: "Assignment 3",
        topic: "Deadlocks",
        description: "Analyze deadlock conditions and prevention strategies.",
        link: "#"
      }
    ]
  },
  "Database Management Systems": {
    "Semester 3": [
      {
        title: "Assignment 1",
        topic: "Normalization",
        description: "Convert raw tables into 1NF, 2NF, 3NF, and BCNF.",
        link: "#"
      },
      {
        title: "Assignment 2",
        topic: "SQL Queries",
        description: "Write joins, aggregate queries, subqueries, and grouped reports.",
        link: "#"
      }
    ]
  }
};

const subjectSelect = document.getElementById("subjectSelect");
const semesterSelect = document.getElementById("semesterSelect");
const assignmentList = document.getElementById("assignmentList");
const assignmentViewer = document.getElementById("assignmentViewer");
const emptyState = document.getElementById("emptyState");
const selectedSubject = document.getElementById("selectedSubject");
const selectedSemester = document.getElementById("selectedSemester");
const assignmentCount = document.getElementById("assignmentCount");

function fillSubjectOptions() {
  const subjects = Object.keys(assignmentData);
  subjectSelect.innerHTML = subjects
    .map((subject) => `<option value="${subject}">${subject}</option>`)
    .join("");
}

function fillSemesterOptions(subject) {
  const semesters = Object.keys(assignmentData[subject] || {});
  semesterSelect.innerHTML = semesters
    .map((semester) => `<option value="${semester}">${semester}</option>`)
    .join("");
}

function renderAssignmentViewer(assignment) {
  assignmentViewer.hidden = false;
  assignmentViewer.innerHTML = `
    <h2>${assignment.title}</h2>
    <p><strong>Topic:</strong> ${assignment.topic}</p>
    <p>${assignment.description}</p>
    <a href="${assignment.link}">Open Assignment</a>
  `;
}

function renderAssignments() {
  const subject = subjectSelect.value;
  const semester = semesterSelect.value;
  const assignments = assignmentData[subject]?.[semester] || [];

  selectedSubject.textContent = subject || "-";
  selectedSemester.textContent = semester || "-";
  assignmentCount.textContent = String(assignments.length);
  assignmentList.innerHTML = "";
  assignmentViewer.hidden = true;
  assignmentViewer.innerHTML = "";

  if (!assignments.length) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  assignments.forEach((assignment, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "assignment-card";
    button.innerHTML = `
      <span class="assignment-meta">${assignment.title}</span>
      <h3>${assignment.topic}</h3>
      <p>${assignment.description}</p>
    `;

    button.addEventListener("click", () => {
      document.querySelectorAll(".assignment-card").forEach((card) => {
        card.classList.remove("active");
      });
      button.classList.add("active");
      renderAssignmentViewer(assignment);
    });

    assignmentList.appendChild(button);

    if (index === 0) {
      button.classList.add("active");
      renderAssignmentViewer(assignment);
    }
  });
}

subjectSelect.addEventListener("change", () => {
  fillSemesterOptions(subjectSelect.value);
  renderAssignments();
});

semesterSelect.addEventListener("change", renderAssignments);

fillSubjectOptions();
fillSemesterOptions(subjectSelect.value);
renderAssignments();
