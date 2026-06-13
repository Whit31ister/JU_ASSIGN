# Assignment 5

## SECTION A

### Q1. Differentiate between Inbuilt Function and User Defined Function.

Functions are blocks of code designed to perform specific tasks.

| Inbuilt Function                              | User Defined Function                         |
| --------------------------------------------- | --------------------------------------------- |
| Predefined functions provided by C libraries. | Functions created by the programmer.          |
| Available through header files.               | Written according to user requirements.       |
| Ready to use.                                 | Must be declared and defined before use.      |
| Examples: `printf()`, `scanf()`, `strlen()`   | Examples: `add()`, `factorial()`, `display()` |

### Example

```c
#include <stdio.h>

void display()
{
    printf("User Defined Function");
}

int main()
{
    printf("Inbuilt Function\n");
    display();

    return 0;
}
```

---

### Q2. What do you mean by Formal Parameter and Actual Parameter?

Parameters are values passed between functions.

### Formal Parameters

Formal parameters are variables declared in the function definition that receive values from the calling function.

### Actual Parameters

Actual parameters are the values supplied during the function call.

### Example

```c
#include <stdio.h>

void add(int a, int b)
{
    printf("Sum = %d", a + b);
}

int main()
{
    add(10, 20);

    return 0;
}
```

In the above example:

```text
Formal Parameters : a, b
Actual Parameters : 10, 20
```

---

### Q3. Discuss Reference and Dereference Operator.

### Reference Operator (`&`)

The reference operator returns the address of a variable.

### Example

```c
int a = 10;
printf("%p", &a);
```

### Dereference Operator (`*`)

The dereference operator accesses the value stored at a memory address.

### Example

```c
int a = 10;
int *ptr = &a;

printf("%d", *ptr);
```

### Difference

| Reference Operator (&)          | Dereference Operator (*)           |
| ------------------------------- | ---------------------------------- |
| Gives address of a variable.    | Gives value stored at an address.  |
| Used while obtaining addresses. | Used while accessing pointed data. |

---

### Q4. Give the advantages of using pointers.

Pointers are variables that store memory addresses.

### Advantages

1. Enable dynamic memory allocation.
2. Improve program execution efficiency.
3. Support call by reference.
4. Facilitate handling arrays and strings.
5. Useful in data structures such as linked lists, trees, and graphs.
6. Allow direct memory access.
7. Help in creating complex data structures.

Pointers are powerful tools that make memory management more efficient.

---

### Q5. What do you understand by EOF?

EOF stands for **End Of File**. It is a special indicator used to signify that no more data is available for reading from a file or input stream.

### Example

```c
#include <stdio.h>

int ch;

while((ch = getchar()) != EOF)
{
    putchar(ch);
}
```

### Uses of EOF

1. Detects end of file during file processing.
2. Controls reading operations.
3. Prevents reading beyond available data.

In C, EOF is generally represented by `-1`.

---

# SECTION B

## Q1. Differentiate between Function Declaration and Function Definition.

Functions must be declared and defined before use.

### Function Declaration

A function declaration informs the compiler about the function name, return type, and parameters.

### Example

```c
int add(int, int);
```

### Function Definition

A function definition contains the actual implementation of the function.

### Example

```c
int add(int a, int b)
{
    return a + b;
}
```

### Difference

| Function Declaration          | Function Definition          |
| ----------------------------- | ---------------------------- |
| Specifies function prototype. | Contains actual code.        |
| No function body.             | Includes function body.      |
| Ends with semicolon.          | Does not end with semicolon. |
| Can appear multiple times.    | Usually appears once.        |

---

## Q2. Differentiate between Structure and Union. Discuss Array of Pointers in C.

### Difference Between Structure and Union

Structures and unions are user-defined data types used to store different data items.

| Structure                                           | Union                                            |
| --------------------------------------------------- | ------------------------------------------------ |
| Allocates separate memory for each member.          | Shares the same memory among all members.        |
| All members can contain values simultaneously.      | Only one member can hold a value at a time.      |
| Requires more memory.                               | Requires less memory.                            |
| Suitable when all data members are needed together. | Suitable when only one member is used at a time. |

### Example of Structure

```c
struct Student
{
    int roll;
    char name[20];
};
```

### Example of Union

```c
union Data
{
    int i;
    float f;
};
```

### Array of Pointers

An array of pointers is an array whose elements are pointers.

### Syntax

```c
data_type *array_name[size];
```

### Example

```c
int a = 10;
int b = 20;
int c = 30;

int *ptr[3];

ptr[0] = &a;
ptr[1] = &b;
ptr[2] = &c;
```

### Advantages

1. Efficient memory usage.
2. Easy handling of strings.
3. Useful in dynamic data structures.

---

## Q3. Explain the concept of making function calls.

A function call is a statement that transfers program control to a function for execution.

### Syntax

```c
function_name(arguments);
```

### Example

```c
#include <stdio.h>

void greet()
{
    printf("Welcome");
}

int main()
{
    greet();

    return 0;
}
```

### Working of Function Call

1. The calling function transfers control to the called function.
2. Arguments are passed to the function if required.
3. The called function executes its statements.
4. Control returns to the calling function.

### Advantages

1. Code reusability.
2. Modular programming.
3. Easier testing and debugging.
4. Better readability.

Functions help divide a large program into smaller manageable modules.

---

# SECTION C

## Q1. Explain the Call by Reference Technique of Passing Parameters to a Function.

Call by Reference is a parameter passing technique in which the address of variables is passed to a function instead of their actual values. The function can directly modify the original variables through pointers.

### Syntax

```c
function(&variable);
```

### Example

```c
#include <stdio.h>

void swap(int *a, int *b)
{
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int x = 10;
    int y = 20;

    swap(&x, &y);

    printf("x = %d\n", x);
    printf("y = %d\n", y);

    return 0;
}
```

### Output

```text
x = 20
y = 10
```

### Advantages

1. Original values can be modified.
2. Efficient memory usage.
3. Suitable for large data structures.
4. Allows returning multiple values from a function.

Call by Reference is widely used when changes made inside a function must affect the original variables.

---

## Q2. Write a Program to Add Two Integers Using Function. Use Call by Address Technique of Passing Parameters.

```c
#include <stdio.h>

void add(int *a, int *b)
{
    printf("Sum = %d", *a + *b);
}

int main()
{
    int num1, num2;

    printf("Enter two integers: ");
    scanf("%d %d", &num1, &num2);

    add(&num1, &num2);

    return 0;
}
```

### Sample Output

```text
Enter two integers: 10 20
Sum = 30
```

---

## Q3. Explain the Concept of Recursive Function with Example. Calculate Factorial of a Given Number Using Recursion.

A recursive function is a function that calls itself repeatedly until a terminating condition is reached. Recursion is useful for solving problems that can be divided into smaller subproblems.

### General Form

```c
return_type function_name(parameters)
{
    if(base_condition)
        return value;

    return function_name(smaller_problem);
}
```

### Factorial Using Recursion

```c
#include <stdio.h>

int factorial(int n)
{
    if(n == 0 || n == 1)
        return 1;

    return n * factorial(n - 1);
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    printf("Factorial = %d", factorial(num));

    return 0;
}
```

### Sample Output

```text
Enter a number: 5
Factorial = 120
```

### Working

```text
factorial(5)
= 5 × factorial(4)
= 5 × 4 × factorial(3)
= 5 × 4 × 3 × factorial(2)
= 5 × 4 × 3 × 2 × factorial(1)
= 5 × 4 × 3 × 2 × 1
= 120
```

### Advantages of Recursion

1. Simplifies complex problems.
2. Produces shorter code.
3. Useful for tree and graph traversal.
4. Suitable for divide-and-conquer algorithms.

Recursion is an important programming technique that solves problems by repeatedly breaking them into smaller versions of the same problem.

