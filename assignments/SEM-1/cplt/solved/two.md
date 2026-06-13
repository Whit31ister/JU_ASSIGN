# Assignment 2

## SECTION A

### Q1. Why is it advisable to plan the logic of a program before coding it?

Planning the logic of a program before coding helps in understanding the problem clearly and developing an effective solution. It reduces errors, improves program efficiency, saves development time, and makes debugging easier. Proper planning also ensures that the program follows a systematic approach and meets all requirements.

### Q2. Write any three problem-solving techniques.

Three common problem-solving techniques are:

1. Algorithm
2. Flowchart
3. Pseudocode

These techniques help programmers analyze problems and design solutions before writing actual code.

### Q3. What is an element in a flowchart? Draw the elements used in a flowchart.

Flowchart elements are standard symbols used to represent different operations in a process.

Common flowchart elements:

```text
Start/End (Terminal)

  _________
 /         \
| Start/End |
 \_________/

Process

+-----------+
| Process   |
+-----------+

Input/Output

 /---------/
| Input/  |
| Output  |
 \---------\

Decision

    /\
   /  \
  < ?  >
   \  /
    \/

Flow Line

---------->
```

These symbols help in representing the logical flow of a program.

### Q4. What is the importance of documentation in program development?

Documentation provides detailed information about a program, including its design, logic, functionality, and usage. It helps developers understand, maintain, modify, and debug the program efficiently. Good documentation improves communication among team members and reduces future development effort.

### Q5. What is the difference between testing and debugging?

| Testing                                                | Debugging                                                   |
| ------------------------------------------------------ | ----------------------------------------------------------- |
| Testing is the process of finding errors in a program. | Debugging is the process of removing errors from a program. |
| It identifies the presence of bugs.                    | It identifies the cause of bugs and fixes them.             |
| Performed before deployment.                           | Performed after bugs are detected.                          |
| Ensures software quality.                              | Ensures correct program execution.                          |

---

# SECTION B

## Q1. What is an algorithm? What are the characteristics of an algorithm?

### Algorithm

An algorithm is a finite sequence of well-defined steps used to solve a problem or perform a specific task. It acts as a blueprint for developing computer programs.

### Characteristics of an Algorithm

1. **Input**: Accepts zero or more inputs.
2. **Output**: Produces at least one output.
3. **Definiteness**: Each step must be clear and unambiguous.
4. **Finiteness**: Must terminate after a finite number of steps.
5. **Effectiveness**: Each step should be simple and executable.
6. **Generality**: Applicable to a class of problems, not just one instance.

Algorithms are important because they provide a structured and efficient way to solve problems.

## Q2. Explain Compiler, Interpreter, Machine Language, and Assembly Language.

### Compiler

A compiler translates the entire source code into machine code at once before execution. It generates an executable file and reports errors after compilation.

Examples:

* GCC
* Turbo C

### Interpreter

An interpreter translates and executes the source code line by line. It reports errors immediately during execution.

Examples:

* Python Interpreter
* JavaScript Engine

### Machine Language

Machine language is the lowest-level programming language consisting of binary digits (0 and 1). It is directly understood by the computer's processor.

Example:

```text
10110000 01100001
```

### Assembly Language

Assembly language uses mnemonic codes instead of binary instructions. It is easier to understand than machine language and requires an assembler for translation.

Example:

```assembly
MOV A, B
ADD A, C
```

## Q3. Write the pseudocode for finding the smaller number out of two given numbers and draw a flowchart for the same.

### Pseudocode

```text
START

INPUT A
INPUT B

IF A < B THEN
    PRINT A is smaller
ELSE
    PRINT B is smaller
END IF

STOP
```

### Flowchart

```text
        +-------+
        | Start |
        +-------+
            |
            v
      +-----------+
      | Input A,B |
      +-----------+
            |
            v
       +---------+
       | A < B ? |
       +---------+
        /      \
      Yes      No
      /          \
     v            v
+-----------+ +-----------+
| Print A   | | Print B   |
| smaller   | | smaller   |
+-----------+ +-----------+
      \         /
       \       /
           v
      +-------+
      | Stop  |
      +-------+
```

---

# SECTION C

## Q1. (a) Discuss the advantages and disadvantages of an algorithm.

### Advantages of an Algorithm

1. Easy to understand and implement.
2. Provides a step-by-step solution.
3. Helps in detecting logical errors before coding.
4. Makes program development faster.
5. Acts as documentation for future reference.
6. Independent of programming language.

### Disadvantages of an Algorithm

1. Writing detailed algorithms for complex problems can be time-consuming.
2. Difficult to represent very large systems.
3. No universal standard for writing algorithms.
4. Lengthy algorithms may become difficult to understand.

Algorithms serve as an important tool in problem-solving and software development despite these limitations.

### (b) Algorithm to Calculate Factorial of a Number

```text
START

INPUT N

FACT = 1

FOR I = 1 TO N
    FACT = FACT * I
END FOR

PRINT FACT

STOP
```

### Example

For N = 5

```text
FACT = 1 × 2 × 3 × 4 × 5
FACT = 120
```

Therefore:

```text
5! = 120
```

## Q2. Explain Flowchart in Detail.

A flowchart is a graphical representation of an algorithm or process. It uses standard symbols connected by arrows to show the sequence of operations involved in solving a problem.

### Common Symbols

| Symbol       | Purpose                   |
| ------------ | ------------------------- |
| Terminal     | Start or End              |
| Process      | Processing operation      |
| Input/Output | Input or output operation |
| Decision     | Condition checking        |
| Flow Line    | Direction of flow         |

### Advantages of Flowcharts

1. Easy to understand and communicate.
2. Helps in program planning.
3. Simplifies debugging and testing.
4. Provides proper documentation.
5. Makes complex processes easier to visualize.

### Disadvantages of Flowcharts

1. Time-consuming to prepare.
2. Difficult to modify large flowcharts.
3. Complex systems may require very large diagrams.

### Example Flowchart for Adding Two Numbers

```text
        +-------+
        | Start |
        +-------+
            |
            v
      +-----------+
      | Input A,B |
      +-----------+
            |
            v
      +-----------+
      | SUM=A+B   |
      +-----------+
            |
            v
      +-----------+
      | Print SUM |
      +-----------+
            |
            v
        +------+
        | Stop |
        +------+
```

Flowcharts are widely used during software design because they provide a clear visual representation of program logic.

## Q3. Explain Stepwise Refinement.

Stepwise Refinement is a problem-solving technique in which a complex problem is divided into smaller and simpler sub-problems. Each sub-problem is further broken down until it becomes easy to implement.

The technique follows a top-down approach where the overall task is gradually refined into detailed steps. It helps programmers focus on one part of the problem at a time and improves program organization.

### Steps of Stepwise Refinement

1. Define the main problem.
2. Divide it into smaller tasks.
3. Break each task into more detailed steps.
4. Continue until each step can be coded directly.
5. Implement and test each module.

### Example

Problem: Calculate Student Result

Level 1:

```text
Calculate Result
```

Level 2:

```text
Input Marks
Calculate Total
Calculate Percentage
Display Result
```

Level 3:

```text
Input Marks of Five Subjects
Add All Marks
Percentage = Total / 5
Display Total and Percentage
```

### Advantages

1. Simplifies complex problems.
2. Improves program readability.
3. Facilitates modular programming.
4. Makes testing and debugging easier.
5. Enhances maintainability.

Stepwise Refinement is an important software design technique that enables programmers to develop efficient and well-structured programs systematically.

