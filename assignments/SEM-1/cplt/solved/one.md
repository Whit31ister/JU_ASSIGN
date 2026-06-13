# Assignment 1 - Section A

*Subject: Computer Programming and Logical Thinking (CPLT)*

## Q1. Why Charles Babbage is called the Father of Computer? Mention his contribution.

Charles Babbage is known as the Father of Computer because he designed the first mechanical computing machines. In 1822, he proposed the Difference Engine for performing mathematical calculations automatically. Later, he designed the Analytical Engine, which included components similar to modern computers such as an arithmetic unit, memory, input and output devices, and control unit. His ideas laid the foundation for the development of modern computers.

## Q2. Write five characteristics of a Computer.

The five main characteristics of a computer are:

1. **Speed** – Performs calculations at a very high speed.
2. **Accuracy** – Produces accurate results when correct data is provided.
3. **Storage Capacity** – Can store large amounts of data and information.
4. **Diligence** – Works continuously without getting tired.
5. **Versatility** – Can perform different types of tasks such as calculations, communication, and data processing.

## Q3. What is Cyclic Code?

A cyclic code is a type of error-detecting and error-correcting code used in digital communication systems. In a cyclic code, if a codeword is shifted cyclically, the resulting sequence is also a valid codeword. Cyclic codes are widely used because they provide efficient error detection and can be implemented using simple hardware circuits.

## Q4. Compare Dynamic RAM with Static RAM.

| Dynamic RAM (DRAM)            | Static RAM (SRAM)             |
| ----------------------------- | ----------------------------- |
| Stores data using capacitors. | Stores data using flip-flops. |
| Requires periodic refreshing. | Does not require refreshing.  |
| Slower than SRAM.             | Faster than DRAM.             |
| Less expensive.               | More expensive.               |
| Used as main memory.          | Used as cache memory.         |

## Q5. What is the Role of 2's Complement in Binary Subtraction?

Two's complement is used to represent negative binary numbers and simplify binary subtraction. Instead of performing direct subtraction, the two's complement of the subtracted number is added to the minuend. This converts subtraction into addition, making arithmetic operations easier for digital circuits and computer processors.

---

# Assignment 1 - Section B

## Q1. What is Memory Hierarchy? Explain the working of Control Unit with a suitable diagram.

### Memory Hierarchy

Memory hierarchy is the arrangement of different storage devices according to their speed, cost, and storage capacity. Frequently used data is stored in faster memory, while less frequently used data is stored in slower memory.

```
        Registers
            |
         Cache
            |
      Main Memory
         (RAM)
            |
   Secondary Storage
   (SSD, HDD, DVD)
```

### Working of Control Unit

The Control Unit (CU) is a component of the CPU that manages and coordinates all operations of a computer. It fetches instructions from memory, decodes them, and directs other units to execute them.

#### Diagram

```
          +----------------+
          |  Memory Unit   |
          +----------------+
                  |
                  v
          +----------------+
          | Control Unit   |
          +----------------+
           /            \
          v              v
+----------------+  +----------------+
| Arithmetic &   |  | Input/Output   |
| Logic Unit     |  | Devices        |
+----------------+  +----------------+
```

The Control Unit ensures proper communication among all computer components and controls the execution of instructions.

## Q2. Convert the following from one base to another base.

### (a) (AF9)16 = (?)2

A = 1010

F = 1111

9 = 1001

Therefore,

```
(AF9)16 = 1010 1111 1001
```

Answer:

```
(AF9)16 = (101011111001)2
```

### (b) (701)8 = (?)2

7 = 111

0 = 000

1 = 001

Therefore,

```
(701)8 = 111000001
```

Answer:

```
(701)8 = (111000001)2
```

### (c) (101111.100)2 = (?)10

Integer Part:

```
1×2^5 + 0×2^4 + 1×2^3 + 1×2^2 + 1×2^1 + 1×2^0
= 32 + 0 + 8 + 4 + 2 + 1
= 47
```

Fractional Part:

```
1×2^-1 + 0×2^-2 + 0×2^-3
= 0.5
```

Total:

```
47 + 0.5 = 47.5
```

Answer:

```
(101111.100)2 = (47.5)10
```

## Q3. (a) Explain the importance of ASCII code with example.

ASCII (American Standard Code for Information Interchange) is a character encoding standard used to represent letters, numbers, and symbols in computers. It allows different computer systems to store, process, and exchange text data in a common format.

Example:

```
'A' = 65
'B' = 66
'a' = 97
'0' = 48
```

ASCII ensures compatibility and reliable communication between different devices and software applications.

## Q3. (b) Explain Primary and Secondary Memory with suitable examples.

### Primary Memory

Primary memory is directly accessible by the CPU and is used to store data and instructions currently being processed.

Examples:

* RAM
* ROM
* Cache Memory

Characteristics:

* Fast access speed
* Limited storage capacity
* More expensive

### Secondary Memory

Secondary memory is used for permanent storage of data and programs.

Examples:

* Hard Disk Drive (HDD)
* Solid State Drive (SSD)
* CD/DVD
* Pen Drive

Characteristics:

* Large storage capacity
* Slower than primary memory
* Less expensive

Primary memory is temporary, while secondary memory provides long-term data storage.

# Assignment 1 - Section C

## Q1. (a) Explain major developments in the Fifth Generation of Computers.

The Fifth Generation of computers began around 1980 and continues to the present day. The primary objective of this generation is the development of intelligent machines capable of learning and decision-making.

### Major Developments

1. **Artificial Intelligence (AI)**

   * Computers can perform tasks that require human intelligence such as reasoning, learning, and problem-solving.

2. **Natural Language Processing**

   * Enables computers to understand and communicate in human languages.

3. **Parallel Processing**

   * Multiple processors work simultaneously to increase speed and efficiency.

4. **Expert Systems**

   * Programs that provide solutions and recommendations similar to human experts.

5. **Machine Learning**

   * Systems can improve their performance automatically by learning from data.

6. **Robotics**

   * Intelligent robots are used in industries, healthcare, and research.

7. **Advanced Semiconductor Technology**

   * Use of Ultra Large Scale Integration (ULSI) technology has greatly increased processing power.

### Applications

* Virtual Assistants
* Self-driving Vehicles
* Medical Diagnosis Systems
* Smart Devices
* Speech Recognition Systems

The Fifth Generation aims to create computers that can think, learn, and interact intelligently with humans.

---

## Q1. (b) Represent -16 in 32-bit Floating Point Binary Format. Mention the role of Bias.

According to the IEEE 754 single-precision floating-point standard:

### Step 1: Convert 16 to Binary

```text
16 = 10000₂
```

### Step 2: Normalize

```text
10000₂ = 1.0000 × 2⁴
```

### Step 3: Determine Sign Bit

Since the number is negative:

```text
Sign Bit = 1
```

### Step 4: Calculate Exponent

Bias for single precision:

```text
Bias = 127
```

Exponent:

```text
4 + 127 = 131
```

Convert 131 to binary:

```text
131 = 10000011₂
```

### Step 5: Mantissa

The fractional part after removing the leading 1:

```text
00000000000000000000000
```

### Final IEEE 754 Representation

```text
1 | 10000011 | 00000000000000000000000
```

32-bit Floating Point Representation:

```text
11000001100000000000000000000000
```

### Role of Bias

Bias is used to store both positive and negative exponents without using a separate sign bit for the exponent. In single-precision floating-point numbers, the bias value is 127. The stored exponent is calculated as:

```text
Stored Exponent = Actual Exponent + Bias
```

This simplifies hardware implementation and comparison of floating-point numbers.

---

## Q2. (a) Explain the Five Generations of Computers. Discuss the role of Microprocessor.

### First Generation (1940-1956)

* Used Vacuum Tubes.
* Very large in size.
* Consumed high power.
* Programming was done in Machine Language.

Example: ENIAC, UNIVAC.

### Second Generation (1956-1963)

* Used Transistors.
* Faster and more reliable.
* Lower power consumption.

Example: IBM 1401.

### Third Generation (1964-1971)

* Used Integrated Circuits (ICs).
* Increased speed and storage.
* Reduced size and cost.

Example: IBM System/360.

### Fourth Generation (1971-Present)

* Based on Microprocessors.
* Development of Personal Computers.
* High processing speed and compact size.

Example: IBM PC, Apple Macintosh.

### Fifth Generation (1980-Present)

* Based on Artificial Intelligence.
* Uses parallel processing and machine learning.
* Supports natural language understanding.

Example: AI systems and intelligent robots.

### Role of Microprocessor

A microprocessor is a complete CPU integrated on a single chip. It performs arithmetic, logical, and control operations.

Importance of Microprocessor:

* Reduced computer size.
* Increased processing speed.
* Lower manufacturing cost.
* Improved reliability.
* Enabled development of laptops, smartphones, and embedded systems.

Microprocessors revolutionized computer technology and became the foundation of modern computing devices.

---

## Q2. (b) Convert the following codes into Decimal.

### (i) (11111.101)₂

Integer Part:

```text
1×2⁴ + 1×2³ + 1×2² + 1×2¹ + 1×2⁰
= 16 + 8 + 4 + 2 + 1
= 31
```

Fractional Part:

```text
1×2⁻¹ + 0×2⁻² + 1×2⁻³
= 0.5 + 0 + 0.125
= 0.625
```

Answer:

```text
(11111.101)₂ = (31.625)₁₀
```

### (ii) (ABC)₁₆

```text
A = 10
B = 11
C = 12
```

Calculation:

```text
10×16² + 11×16¹ + 12×16⁰
= 10×256 + 11×16 + 12
= 2560 + 176 + 12
= 2748
```

Answer:

```text
(ABC)₁₆ = (2748)₁₀
```

### (iii) (70067)₈

Calculation:

```text
7×8⁴ + 0×8³ + 0×8² + 6×8¹ + 7×8⁰
= 7×4096 + 0 + 0 + 48 + 7
= 28672 + 48 + 7
= 28727
```

Answer:

```text
(70067)₈ = (28727)₁₀
```

---

## Q3. (a) Explain Input and Output Devices of a Computer with Examples.

### Input Devices

Input devices are hardware components used to enter data and instructions into a computer.

Examples:

* Keyboard
* Mouse
* Scanner
* Microphone
* Webcam
* Joystick

Functions:

* Accept data from users.
* Convert data into machine-readable form.
* Send data to the CPU for processing.

### Output Devices

Output devices display the results processed by the computer.

Examples:

* Monitor
* Printer
* Speaker
* Projector
* Plotter

Functions:

* Present processed information.
* Produce visual, audio, or printed output.

Input devices provide data to the computer, while output devices deliver the processed results to the user.

---

## Q3. (b) Evaluate the Following

### (i) 10000001₂ − 1111₂

Convert to decimal:

```text
10000001₂ = 129
1111₂ = 15
```

Subtract:

```text
129 − 15 = 114
```

Convert 114 to binary:

```text
114 = 1110010₂
```

Answer:

```text
10000001₂ − 1111₂ = 1110010₂
```

### (ii) 101010₂ × 11₂

```text
      101010
×         11
-------------
      101010
+   1010100
-------------
   1111110
```

Answer:

```text
101010₂ × 11₂ = 1111110₂
```

### (iii) 10100010₂ + 101₂

```text
10100010₂ = 162
101₂ = 5
```

```text
162 + 5 = 167
```

Convert 167 to binary:

```text
167 = 10100111₂
```

Answer:

```text
10100010₂ + 101₂ = 10100111₂
```
