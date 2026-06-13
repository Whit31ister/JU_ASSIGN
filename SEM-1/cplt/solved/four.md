# Assignment 4

## SECTION A

### Q1. What is the difference between the `while` and `do-while` loops in C?

Both `while` and `do-while` loops are used for repetitive execution of statements, but they differ in the position of condition checking.

| while Loop                                                  | do-while Loop                                       |
| ----------------------------------------------------------- | --------------------------------------------------- |
| Condition is checked before executing the loop body.        | Condition is checked after executing the loop body. |
| May execute zero times if the condition is false initially. | Executes at least once regardless of the condition. |
| Entry-controlled loop.                                      | Exit-controlled loop.                               |

### Example of while Loop

```c
int i = 1;

while(i <= 5)
{
    printf("%d ", i);
    i++;
}
```

### Example of do-while Loop

```c
int i = 1;

do
{
    printf("%d ", i);
    i++;
}
while(i <= 5);
```

---

### Q2. What is the purpose of the switch statement in C? Give an example.

The `switch` statement is a multi-way decision-making statement used when a variable can have multiple possible values. It provides a cleaner alternative to multiple `if-else` statements.

### Syntax

```c
switch(expression)
{
    case value1:
        statements;
        break;

    case value2:
        statements;
        break;

    default:
        statements;
}
```

### Example

```c
#include <stdio.h>

int main()
{
    int day = 2;

    switch(day)
    {
        case 1:
            printf("Monday");
            break;

        case 2:
            printf("Tuesday");
            break;

        default:
            printf("Invalid Day");
    }

    return 0;
}
```

---

### Q3. What is an array in C? How do you declare an array?

An array is a collection of elements of the same data type stored in contiguous memory locations. Arrays allow multiple values to be stored using a single variable name.

### Syntax

```c
data_type array_name[size];
```

### Example

```c
int marks[5];
```

Initialization:

```c
int marks[5] = {80, 75, 90, 85, 88};
```

### Advantages

1. Stores multiple values under one name.
2. Simplifies data management.
3. Allows easy access using indexes.
4. Reduces code complexity.

---

### Q4. What are the common string manipulation functions available in C?

String manipulation functions are provided in the `string.h` header file.

| Function   | Purpose                      |
| ---------- | ---------------------------- |
| `strlen()` | Finds length of a string     |
| `strcpy()` | Copies one string to another |
| `strcat()` | Concatenates two strings     |
| `strcmp()` | Compares two strings         |
| `strrev()` | Reverses a string            |
| `strupr()` | Converts string to uppercase |
| `strlwr()` | Converts string to lowercase |

### Example

```c
#include <string.h>

char str1[20] = "Hello";
char str2[20] = "World";

strcat(str1, str2);
```

Output:

```text
HelloWorld
```

---

### Q5. Discuss Alteration and Iteration in C with examples.

### Alteration

Alteration (Selection) refers to choosing one path among multiple alternatives based on a condition.

Examples:

* `if`
* `if-else`
* `switch`

```c
if(age >= 18)
{
    printf("Eligible to vote");
}
else
{
    printf("Not eligible");
}
```

### Iteration

Iteration means repeatedly executing a set of statements until a condition becomes false.

Examples:

* `for`
* `while`
* `do-while`

```c
for(int i = 1; i <= 5; i++)
{
    printf("%d ", i);
}
```

Selection helps in decision-making, while iteration helps in repetition of tasks.

---

# SECTION B

## Q1. Discuss the different types of loops in C with the help of examples.

Loops are used to execute a block of code repeatedly.

### Types of Loops in C

#### 1. for Loop

Used when the number of iterations is known.

```c
for(int i = 1; i <= 5; i++)
{
    printf("%d ", i);
}
```

Output:

```text
1 2 3 4 5
```

#### 2. while Loop

Used when the condition is checked before execution.

```c
int i = 1;

while(i <= 5)
{
    printf("%d ", i);
    i++;
}
```

#### 3. do-while Loop

Executes at least once.

```c
int i = 1;

do
{
    printf("%d ", i);
    i++;
}
while(i <= 5);
```

### Advantages of Loops

1. Reduce code repetition.
2. Improve efficiency.
3. Simplify complex tasks.
4. Make programs shorter and easier to maintain.

---

## Q2. What is the purpose of decision control structures in C? Explain the basic types of decision control statements in C.

Decision control structures allow a program to make decisions and execute specific statements based on conditions.

### Purpose

1. Controls program flow.
2. Enables decision-making.
3. Executes different actions for different conditions.

### Types of Decision Control Statements

#### 1. if Statement

```c
if(x > 0)
{
    printf("Positive");
}
```

#### 2. if-else Statement

```c
if(x % 2 == 0)
{
    printf("Even");
}
else
{
    printf("Odd");
}
```

#### 3. Nested if

```c
if(x > 0)
{
    if(x < 100)
    {
        printf("Valid");
    }
}
```

#### 4. else-if Ladder

```c
if(marks >= 90)
{
    printf("A");
}
else if(marks >= 75)
{
    printf("B");
}
else
{
    printf("C");
}
```

#### 5. switch Statement

```c
switch(choice)
{
    case 1:
        printf("Addition");
        break;

    default:
        printf("Invalid");
}
```

Decision control statements help implement logical choices efficiently.

---

## Q3. Explain how a string can be manipulated using string handling functions in C.

String manipulation refers to operations performed on strings using predefined functions available in `string.h`.

### Common String Operations

#### Length of String

```c
strlen(str);
```

#### Copying a String

```c
strcpy(destination, source);
```

#### Concatenation

```c
strcat(str1, str2);
```

#### Comparison

```c
strcmp(str1, str2);
```

### Example Program

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char str1[20] = "Hello";
    char str2[20] = "World";

    printf("Length = %lu\n", strlen(str1));

    strcat(str1, str2);

    printf("Concatenated String = %s", str1);

    return 0;
}
```

Output:

```text
Length = 5
Concatenated String = HelloWorld
```

String handling functions make string operations simple and efficient.

---

# SECTION C

## Q1. Explain the differences between a one-dimensional array and a multi-dimensional array. Provide examples where you would use each.

An array is a collection of elements of the same data type stored in contiguous memory locations.

### One-Dimensional Array

A one-dimensional array stores elements in a single row.

### Declaration

```c
int marks[5];
```

### Example

```c
int marks[5] = {80, 85, 90, 75, 88};
```

### Applications

1. Storing marks of students.
2. Storing temperatures.
3. Storing salaries.

### Multi-Dimensional Array

A multi-dimensional array stores data in rows and columns.

### Declaration

```c
int matrix[3][3];
```

### Example

```c
int matrix[2][2] =
{
    {1, 2},
    {3, 4}
};
```

### Applications

1. Matrix operations.
2. Game boards.
3. Tabular data storage.

### Difference

| One-Dimensional Array  | Multi-Dimensional Array         |
| ---------------------- | ------------------------------- |
| Single index           | Multiple indexes                |
| Data stored in one row | Data stored in rows and columns |
| Easier to access       | More suitable for complex data  |

---

## Q2. Write a C program that prompts the user to select an arithmetic operation (addition, subtraction, multiplication, division) by entering a number from 1 to 4. The program should then ask for two numbers and perform the chosen operation.

```c
#include <stdio.h>

int main()
{
    int choice;
    float num1, num2;

    printf("1. Addition\n");
    printf("2. Subtraction\n");
    printf("3. Multiplication\n");
    printf("4. Division\n");

    printf("Enter your choice: ");
    scanf("%d", &choice);

    printf("Enter two numbers: ");
    scanf("%f %f", &num1, &num2);

    switch(choice)
    {
        case 1:
            printf("Result = %.2f", num1 + num2);
            break;

        case 2:
            printf("Result = %.2f", num1 - num2);
            break;

        case 3:
            printf("Result = %.2f", num1 * num2);
            break;

        case 4:
            if(num2 != 0)
                printf("Result = %.2f", num1 / num2);
            else
                printf("Division by zero is not allowed");
            break;

        default:
            printf("Invalid Choice");
    }

    return 0;
}
```

---

## Q3. Write a C program to generate a Fibonacci series up to n terms.

```c
#include <stdio.h>

int main()
{
    int n, first = 0, second = 1, next;

    printf("Enter number of terms: ");
    scanf("%d", &n);

    printf("Fibonacci Series:\n");

    for(int i = 1; i <= n; i++)
    {
        printf("%d ", first);

        next = first + second;
        first = second;
        second = next;
    }

    return 0;
}
```

### Sample Output

```text
Enter number of terms: 10

Fibonacci Series:
0 1 1 2 3 5 8 13 21 34
```

