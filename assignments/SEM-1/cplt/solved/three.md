# Assignment 3

## SECTION A

### Q1. What is the difference between the `int` and `float` data types in C? Give examples of situations where each would be appropriate.

The `int` and `float` data types are used to store different types of numerical values in C.

| int                                 | float                                        |
| ----------------------------------- | -------------------------------------------- |
| Stores whole numbers.               | Stores numbers with decimal points.          |
| Requires less memory.               | Requires more memory.                        |
| Does not support fractional values. | Supports fractional values.                  |
| Faster for arithmetic operations.   | Slightly slower due to decimal calculations. |

### Examples

```c
int age = 20;
float percentage = 85.5;
```

**Uses of int:**

* Counting students
* Roll numbers
* Number of books

**Uses of float:**

* Percentage calculation
* Scientific measurements
* Temperature values

---

### Q2. Explain the purpose of the `#include` directive in C. Give an example of how it is used with a standard library header file.

The `#include` directive is a preprocessor command used to include header files in a C program. Header files contain function declarations, macros, and definitions required by the program.

### Syntax

```c
#include <header_file>
```

### Example

```c
#include <stdio.h>

int main()
{
    printf("Hello World");
    return 0;
}
```

In this example, `stdio.h` provides the declaration of the `printf()` function.

### Advantages

1. Promotes code reusability.
2. Provides access to library functions.
3. Reduces programming effort.
4. Improves program organization.

---

### Q3. What is a Token? Discuss the uses of the `const` keyword.

### Token

A token is the smallest meaningful unit of a C program recognized by the compiler.

### Types of Tokens

1. Keywords
2. Identifiers
3. Constants
4. Strings
5. Operators
6. Special Symbols

### Example

```c
int a = 10;
```

Tokens:

```text
int
a
=
10
;
```

### Uses of `const` Keyword

The `const` keyword is used to declare constants whose values cannot be changed during program execution.

### Example

```c
const float PI = 3.14159;
```

### Advantages

1. Prevents accidental modification.
2. Improves program reliability.
3. Makes code easier to understand.
4. Helps in maintaining fixed values.

---

### Q4. Write a C expression to calculate the area of a Triangle.

The formula for the area of a triangle is:

```text
Area = (Base × Height) / 2
```

### C Expression

```c
area = (base * height) / 2;
```

### Example

```c
float area, base = 10, height = 5;

area = (base * height) / 2;
```

Output:

```text
Area = 25
```

---

### Q5. What is the purpose of the `main()` function in a C program?

The `main()` function is the entry point of a C program. Program execution starts from the `main()` function and ends when it finishes execution.

### Example

```c
#include <stdio.h>

int main()
{
    printf("Welcome");
    return 0;
}
```

### Functions of `main()`

1. Starts program execution.
2. Calls other functions.
3. Controls the flow of the program.
4. Returns status information to the operating system.

---

# SECTION B

## Q1. Explain the difference between the `=` and `==` operators in C. Provide examples of how each is used.

The operators `=` and `==` serve different purposes in C programming.

| = Operator                     | == Operator                    |
| ------------------------------ | ------------------------------ |
| Assignment Operator            | Relational Operator            |
| Assigns a value to a variable. | Compares two values.           |
| Does not return true or false. | Returns true (1) or false (0). |

### Example of `=`

```c
int a;
a = 10;
```

### Example of `==`

```c
if(a == 10)
{
    printf("Equal");
}
```

Using `=` instead of `==` in conditions may lead to logical errors.

---

## Q2. What is an arithmetic expression in C? Give an example of Ternary Operator and explain how it is used in expressions.

### Arithmetic Expression

An arithmetic expression consists of operands and arithmetic operators used to perform calculations.

### Example

```c
result = a + b * c;
```

Arithmetic operators:

```text
+
-
*
/
%
```

### Ternary Operator

The ternary operator is a shorthand form of the `if-else` statement.

### Syntax

```c
condition ? expression1 : expression2;
```

### Example

```c
int a = 10, b = 20;

int max = (a > b) ? a : b;
```

### Explanation

* If `a > b` is true, `max = a`
* Otherwise, `max = b`

### Advantages

1. Reduces code length.
2. Improves readability.
3. Useful for simple decisions.

---

## Q3. Write a C program that prompts the user for their name and age, then prints a greeting message including their name and age.

```c
#include <stdio.h>

int main()
{
    char name[50];
    int age;

    printf("Enter your name: ");
    scanf("%s", name);

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("\nHello %s! You are %d years old.\n", name, age);

    return 0;
}
```

### Sample Output

```text
Enter your name: Rahul
Enter your age: 20

Hello Rahul! You are 20 years old.
```

---

# SECTION C

## Q1. Discuss the different types of logical operators in C. Give examples of how they are used in logical expressions.

Logical operators are used to combine or evaluate conditions in C.

### Types of Logical Operators

| Operator | Meaning     |
| -------- | ----------- |
| &&       | Logical AND |
| ||       | Logical OR  |
| !        | Logical NOT |

### Logical AND (`&&`)

Returns true only if both conditions are true.

```c
int a = 10, b = 20;

if(a > 5 && b > 15)
{
    printf("True");
}
```

### Logical OR (`||`)

Returns true if at least one condition is true.

```c
if(a > 15 || b > 15)
{
    printf("True");
}
```

### Logical NOT (`!`)

Reverses the result of a condition.

```c
if(!(a > 15))
{
    printf("True");
}
```

### Applications

1. Decision making.
2. Input validation.
3. Loop control.
4. Complex conditional statements.

Logical operators play an important role in controlling program flow and evaluating multiple conditions efficiently.

---

## Q2. Write a C program that calculates the sum of the first 10 natural numbers.

```c
#include <stdio.h>

int main()
{
    int i, sum = 0;

    for(i = 1; i <= 10; i++)
    {
        sum = sum + i;
    }

    printf("Sum of first 10 natural numbers = %d", sum);

    return 0;
}
```

### Sample Output

```text
Sum of first 10 natural numbers = 55
```

---

## Q3. Explain the concept of operator precedence in C. Discuss the uses of different types of header files.

### Operator Precedence

Operator precedence determines the order in which operators are evaluated in an expression.

### Example

```c
int result = 10 + 5 * 2;
```

Multiplication has higher precedence than addition.

```text
10 + (5 × 2)
= 10 + 10
= 20
```

### Common Operator Precedence

| Precedence     | Operators    |
| -------------- | ------------ |
| Highest        | (), []       |
| Unary          | ++, --, !    |
| Multiplicative | *, /, %      |
| Additive       | +, -         |
| Relational     | <, >, <=, >= |
| Equality       | ==, !=       |
| Logical AND    | &&           |
| Logical OR     | ||           |
| Lowest         | =            |

### Header Files in C

Header files contain declarations of functions, macros, and constants.

### Types of Header Files

#### 1. Standard Header Files

Provided by the C library.

Examples:

```c
#include <stdio.h>
#include <math.h>
#include <string.h>
```

Uses:

* Input/output operations
* Mathematical functions
* String handling

#### 2. User-Defined Header Files

Created by programmers for custom functions.

Example:

```c
#include "myheader.h"
```

Uses:

* Code reusability
* Modular programming
* Better project organization

### Advantages of Header Files

1. Reduce code duplication.
2. Improve maintainability.
3. Support modular programming.
4. Simplify large software development.

Header files are essential components of C programming because they provide reusable declarations and improve program organization.

