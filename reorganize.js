const fs = require('fs');
const path = require('path');

const moves = [
  { file: '1_EM1_assignment_1-2.pdf', dest: 'Engineering Mathematics I/Assignments' },
  { file: '1_applied-physics_assignment_3.docx', dest: 'Applied Physics/Assignments' },
  { file: '1_applied-physics_assignment_4.docx', dest: 'Applied Physics/Assignments' },
  { file: '2_CPP_assignment_3.pdf', dest: 'C++/Assignments' },
  { file: '2_EM2_assignment_3.pdf', dest: 'Engineering Mathematics II/Assignments' },
  { file: '2_EM2_assignment_4.pdf', dest: 'Engineering Mathematics II/Assignments' },
  { file: '2_professional-skills_assignment_3.pdf', dest: 'Professional Skills/Assignments' }
];

moves.forEach(({ file, dest }) => {
  const source = path.join('assignments', file);
  const targetDir = path.join('assignments', dest);
  const target = path.join(targetDir, file);
  
  if (fs.existsSync(source)) {
    fs.mkdirSync(targetDir, { recursive: true });
    fs.renameSync(source, target);
  }
});

const dummies = [
  'Engineering Mathematics I/Notes/chapter1_matrices.pdf',
  'Applied Physics/Practicals/laser_experiment.pdf',
  'C++/Class PPTs/Lecture_5_Constructors.pptx'
];

dummies.forEach(dummy => {
  const target = path.join('assignments', dummy);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, 'Dummy file content for testing folder layout.');
  }
});

console.log("Reorganization complete.");
