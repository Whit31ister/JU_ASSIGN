# Discrete Mathematics - Assignment 1

**Subject:** Discrete Mathematics
**Subject Code:** BAS007B
**Semester:** III
**Unit:** 1

---

# PART A

## A1. If \(P=\{1,2,3,4\}\) and \(Q=\{4,5,6,7\}\), find \(P\triangle Q\) and its cardinality.

The symmetric difference of two sets is defined as:

$$
P\triangle Q=(P-Q)\cup(Q-P)
$$

Given:

$$
P=\{1,2,3,4\}
$$

$$
Q=\{4,5,6,7\}
$$

First, find \(P-Q\):

$$
P-Q=\{1,2,3\}
$$

Next, find \(Q-P\):

$$
Q-P=\{5,6,7\}
$$

Therefore:

$$
P\triangle Q=\{1,2,3\}\cup\{5,6,7\}
$$

$$
\boxed{P\triangle Q=\{1,2,3,5,6,7\}}
$$

Hence, the cardinality is:

$$
\boxed{|P\triangle Q|=6}
$$

---

## A2. Find the domain and range of the function \(f(x)=e^{\{x\}}\).

The fractional part of a real number \(x\) is denoted by \(\{x\}\), and:

$$
0\leq \{x\}<1
$$

The given function is:

$$
f(x)=e^{\{x\}}
$$

Since the fractional part is defined for every real number,

$$
\boxed{\operatorname{Dom}(f)=\mathbb{R}}
$$

For the range:

$$
0\leq\{x\}<1
$$

Applying the exponential function:

$$
e^0\leq e^{\{x\}}<e^1
$$

Therefore:

$$
1\leq f(x)<e
$$

Hence,

$$
\boxed{\operatorname{Ran}(f)=[1,e)}
$$

---

## A3. Let \(U=\{1,2,3,4,5,6\}\) and \(A=\{2,4,6\}\). Find \(A^c\).

The complement of \(A\) with respect to \(U\) is:

$$
A^c=U-A
$$

Given:

$$
U=\{1,2,3,4,5,6\}
$$

$$
A=\{2,4,6\}
$$

Therefore:

$$
A^c=\{1,3,5\}
$$

Hence,

$$
\boxed{A^c=\{1,3,5\}}
$$

---

## A4. Write the power set of the empty set and the set of natural numbers.

### Power Set of the Empty Set

The power set of a set \(A\), denoted by \(\mathcal{P}(A)\), is the set of all subsets of \(A\).

For the empty set:

$$
\varnothing=\{\}
$$

Its only subset is itself. Therefore:

$$
\boxed{\mathcal{P}(\varnothing)=\{\varnothing\}}
$$

### Power Set of the Set of Natural Numbers

Taking:

$$
\mathbb{N}=\{1,2,3,\ldots\}
$$

the power set is:

$$
\boxed{
\mathcal{P}(\mathbb{N})
=
\{A\mid A\subseteq\mathbb{N}\}
}
$$

It contains every subset of \(\mathbb{N}\), such as:

$$
\varnothing,\{1\},\{2\},\{1,2\},\{3,5\},\ldots
$$

Since \(\mathbb{N}\) is infinite, \(\mathcal{P}(\mathbb{N})\) is also infinite.

---

## A5. Find the Cartesian product of \(A=\{1,2\}\) and \(B=\{d,e,f\}\).

The Cartesian product of \(A\) and \(B\) is defined as:

$$
A\times B=\{(a,b)\mid a\in A,\ b\in B\}
$$

Given:

$$
A=\{1,2\}
$$

$$
B=\{d,e,f\}
$$

Therefore:

$$
\boxed{
A\times B=
\{(1,d),(1,e),(1,f),(2,d),(2,e),(2,f)\}
}
$$

The cardinality is:

$$
|A\times B|=|A|\cdot|B|
$$

$$
=2\cdot3
$$

$$
\boxed{|A\times B|=6}
$$

---

# PART B

## B1. Let \(f_1(x)=3x+1\) and \(f_2(x)=x^2-2\), where \(f_1,f_2:\mathbb{R}\to\mathbb{R}\). Find \(f_1+f_2\) and \(f_1\circ f_2\).

Given:

$$
f_1(x)=3x+1
$$

$$
f_2(x)=x^2-2
$$

### 1. Find \(f_1+f_2\)

By definition:

$$
(f_1+f_2)(x)=f_1(x)+f_2(x)
$$

Therefore:

$$
(f_1+f_2)(x)=(3x+1)+(x^2-2)
$$

$$
=x^2+3x-1
$$

Hence:

$$
\boxed{(f_1+f_2)(x)=x^2+3x-1}
$$

### 2. Find \(f_1\circ f_2\)

By definition:

$$
(f_1\circ f_2)(x)=f_1(f_2(x))
$$

Since:

$$
f_2(x)=x^2-2
$$

we get:

$$
f_1(f_2(x))=f_1(x^2-2)
$$

Using:

$$
f_1(x)=3x+1
$$

we obtain:

$$
f_1(x^2-2)=3(x^2-2)+1
$$

$$
=3x^2-6+1
$$

$$
=3x^2-5
$$

Therefore:

$$
\boxed{(f_1\circ f_2)(x)=3x^2-5}
$$

### Final Answer

$$
\boxed{(f_1+f_2)(x)=x^2+3x-1}
$$

$$
\boxed{(f_1\circ f_2)(x)=3x^2-5}
$$

---

## B2. Let \(f:\mathbb{R}\to\mathbb{R}\) be defined by \(f(x)=2x+5\). Is \(f\) invertible? If yes, find the inverse.

Given:

$$
f(x)=2x+5
$$

To determine whether \(f\) is invertible, check whether it is one-to-one and onto.

For one-to-one, suppose:

$$
f(x_1)=f(x_2)
$$

Then:

$$
2x_1+5=2x_2+5
$$

$$
2x_1=2x_2
$$

$$
x_1=x_2
$$

Therefore, \(f\) is one-to-one.

Since \(f:\mathbb{R}\to\mathbb{R}\) and for any \(y\in\mathbb{R}\),

$$
y=2x+5
$$

gives:

$$
x=\frac{y-5}{2}\in\mathbb{R}
$$

the function is onto.

Hence, \(f\) is invertible.

### Finding the Inverse

Let:

$$
y=2x+5
$$

Interchange \(x\) and \(y\):

$$
x=2y+5
$$

Solving for \(y\):

$$
x-5=2y
$$

$$
y=\frac{x-5}{2}
$$

Therefore:

$$
\boxed{f^{-1}(x)=\frac{x-5}{2}}
$$

### Verification

$$
f(f^{-1}(x))
=
2\left(\frac{x-5}{2}\right)+5
$$

$$
=x-5+5
$$

$$
=x
$$

Hence:

$$
\boxed{f^{-1}(x)=\frac{x-5}{2}}
$$

---

## B3. Let \(f(x)=x+1\) and \(g(x)=2x-3\), both functions from \(\mathbb{Z}\) to \(\mathbb{Z}\). Find the compositions \(f\circ g\) and \(g\circ f\).

Given:

$$
f(x)=x+1
$$

$$
g(x)=2x-3
$$

### 1. Find \(f\circ g\)

By definition:

$$
(f\circ g)(x)=f(g(x))
$$

Substitute:

$$
g(x)=2x-3
$$

Therefore:

$$
f(g(x))=f(2x-3)
$$

Since:

$$
f(x)=x+1
$$

we get:

$$
f(2x-3)=(2x-3)+1
$$

$$
=2x-2
$$

Hence:

$$
\boxed{(f\circ g)(x)=2x-2}
$$

### 2. Find \(g\circ f\)

By definition:

$$
(g\circ f)(x)=g(f(x))
$$

Since:

$$
f(x)=x+1
$$

we get:

$$
g(f(x))=g(x+1)
$$

Using:

$$
g(x)=2x-3
$$

we obtain:

$$
g(x+1)=2(x+1)-3
$$

$$
=2x+2-3
$$

$$
=2x-1
$$

Therefore:

$$
\boxed{(g\circ f)(x)=2x-1}
$$

### Final Answer

$$
\boxed{(f\circ g)(x)=2x-2}
$$

$$
\boxed{(g\circ f)(x)=2x-1}
$$

---

# PART C

## C1. In a group of 120 students, 50 study Mathematics, 60 study Physics, 40 study Chemistry. It was found that 20 study both Mathematics and Physics, 15 study Mathematics and Chemistry, 10 study Physics and Chemistry and 5 study all three subjects. Find the number of students who study only Physics and Chemistry but not Mathematics.

Let:

$$
M=\text{students studying Mathematics}
$$

$$
P=\text{students studying Physics}
$$

$$
C=\text{students studying Chemistry}
$$

Given:

$$
|P\cap C|=10
$$

and:

$$
|M\cap P\cap C|=5
$$

The students who study only Physics and Chemistry, but not Mathematics, are:

$$
|(P\cap C)-M|
=
|P\cap C|-|M\cap P\cap C|
$$

Substituting the values:

$$
|(P\cap C)-M|=10-5
$$

$$
=5
$$

Therefore:

$$
\boxed{5\text{ students}}
$$

---

## C2. In a language survey, it was found that among 1000 students: 600 know English, 500 know French, 400 know German. Also, 200 know English and French, 150 know French and German, 100 know English and German, and 50 know all three languages. Find the number of students who know:

### Given

Let:

$$
E=\text{English}
$$

$$
F=\text{French}
$$

$$
G=\text{German}
$$

Given:

$$
|E|=600
$$

$$
|F|=500
$$

$$
|G|=400
$$

$$
|E\cap F|=200
$$

$$
|F\cap G|=150
$$

$$
|E\cap G|=100
$$

$$
|E\cap F\cap G|=50
$$

---

### (a) French only

French only means:

$$
F-(E\cup G)
$$

Using inclusion-exclusion within \(F\):

$$
|F\text{ only}|
=
|F|-|E\cap F|-|F\cap G|+|E\cap F\cap G|
$$

Substituting:

$$
=500-200-150+50
$$

$$
=200
$$

Therefore:

$$
\boxed{200\text{ students}}
$$

---

### (b) At least one language

Using the inclusion-exclusion principle:

$$
|E\cup F\cup G|
=
|E|+|F|+|G|
-|E\cap F|
-|F\cap G|
-|E\cap G|
+|E\cap F\cap G|
$$

Substituting:

$$
|E\cup F\cup G|
=
600+500+400-200-150-100+50
$$

$$
=1100
$$

Therefore, according to the given data:

$$
\boxed{|E\cup F\cup G|=1100}
$$

However, the question states that the total number of students is 1000. Thus:

$$
1100>1000
$$

which is impossible.

Therefore, the numerical data given in the question is internally inconsistent. The calculated union from the provided values is 1100, but it cannot represent a subset of a population of only 1000 students. 

---

### (c) Exactly two languages

First, English and French only:

$$
|(E\cap F)-G|
=
|E\cap F|-|E\cap F\cap G|
$$

$$
=200-50
$$

$$
=150
$$

French and German only:

$$
|(F\cap G)-E|
=
|F\cap G|-|E\cap F\cap G|
$$

$$
=150-50
$$

$$
=100
$$

English and German only:

$$
|(E\cap G)-F|
=
|E\cap G|-|E\cap F\cap G|
$$

$$
=100-50
$$

$$
=50
$$

Therefore:

$$
|\text{Exactly two languages}|
=
150+100+50
$$

$$
=300
$$

Hence:

$$
\boxed{300\text{ students}}
$$

---

### (d) None of the three languages

The number of students knowing none of the languages is:

$$
|\text{None}|=1000-|E\cup F\cup G|
$$

Using the calculated value:

$$
|\text{None}|=1000-1100
$$

$$
=-100
$$

A negative number of students is impossible.

Therefore, the given data is inconsistent and no valid non-negative answer can be obtained for this part without correcting one or more values in the question.

### Results from the Given Data

$$
\boxed{\text{French only}=200}
$$

$$
\boxed{\text{At least one language}=1100\text{ (inconsistent with total 1000)}}
$$

$$
\boxed{\text{Exactly two languages}=300}
$$

$$
\boxed{\text{None}=-100\text{ (impossible)}}
$$

---

## C3. Define Exponential Function, Logarithm Function, Floor Function, Ceiling Function, Mod Function and Div Function with Domain and Range. Also Give Examples.

### 1. Exponential Function

An exponential function is a function of the form:

$$
f(x)=a^x
$$

where:

$$
a>0,\qquad a\neq1
$$

### Domain

$$
\boxed{\operatorname{Dom}(f)=\mathbb{R}}
$$

### Range

$$
\boxed{\operatorname{Ran}(f)=(0,\infty)}
$$

### Example

$$
f(x)=2^x
$$

For example:

$$
2^0=1
$$

$$
2^1=2
$$

$$
2^3=8
$$

---

### 2. Logarithm Function

A logarithm function is the inverse of an exponential function.

$$
f(x)=\log_a x
$$

where:

$$
a>0,\qquad a\neq1,\qquad x>0
$$

### Domain

$$
\boxed{\operatorname{Dom}(f)=(0,\infty)}
$$

### Range

$$
\boxed{\operatorname{Ran}(f)=\mathbb{R}}
$$

### Example

$$
\log_2 8=3
$$

because:

$$
2^3=8
$$

---

### 3. Floor Function

The floor function of \(x\), denoted by \(\lfloor x\rfloor\), is the greatest integer less than or equal to \(x\).

$$
\boxed{\lfloor x\rfloor\leq x<\lfloor x\rfloor+1}
$$

### Domain

$$
\boxed{\operatorname{Dom}(f)=\mathbb{R}}
$$

### Range

$$
\boxed{\operatorname{Ran}(f)=\mathbb{Z}}
$$

### Examples

$$
\lfloor3.7\rfloor=3
$$

$$
\lfloor5.2\rfloor=5
$$

$$
\lfloor-2.3\rfloor=-3
$$

---

### 4. Ceiling Function

The ceiling function of \(x\), denoted by \(\lceil x\rceil\), is the smallest integer greater than or equal to \(x\).

$$
\boxed{\lceil x\rceil-1<x\leq\lceil x\rceil}
$$

### Domain

$$
\boxed{\operatorname{Dom}(f)=\mathbb{R}}
$$

### Range

$$
\boxed{\operatorname{Ran}(f)=\mathbb{Z}}
$$

### Examples

$$
\lceil3.2\rceil=4
$$

$$
\lceil5.8\rceil=6
$$

$$
\lceil-2.3\rceil=-2
$$

---

### 5. Mod Function

For integers \(a\) and \(b\), with \(b\neq0\), the modulo function gives the remainder after division.

It can be written as:

$$
a\bmod b=r
$$

where:

$$
a=qb+r
$$

For \(b>0\):

$$
0\leq r<b
$$

### Domain

$$
\boxed{a,b\in\mathbb{Z},\ b\neq0}
$$

### Range for \(b>0\)

$$
\boxed{\{0,1,2,\ldots,b-1\}}
$$

### Example

$$
17\bmod5=2
$$

because:

$$
17=5(3)+2
$$

---

### 6. Div Function

The `div` function gives the integer quotient obtained during division.

For integers \(a\) and \(b\), \(b\neq0\):

$$
a\operatorname{div}b=q
$$

where \(q\) is the integer quotient.

### Domain

$$
\boxed{a,b\in\mathbb{Z},\ b\neq0}
$$

### Range

$$
\boxed{\mathbb{Z}}
$$

### Example

$$
17\operatorname{div}5=3
$$

because:

$$
17=5(3)+2
$$

Therefore:

$$
17\operatorname{div}5=3
$$

and:

$$
17\bmod5=2
$$

---

## Summary Table

| Function    | Definition               | Domain                       | Range            | Example                     |
| ----------- | ------------------------ | ---------------------------- | ---------------- | --------------------------- |
| Exponential | \(f(x)=a^x\)             | \(\mathbb{R}\)               | \((0,\infty)\)   | \(2^3=8\)                   |
| Logarithm   | \(f(x)=\log_a x\)        | \((0,\infty)\)               | \(\mathbb{R}\)   | \(\log_2 8=3\)              |
| Floor       | \(\lfloor x\rfloor\)     | \(\mathbb{R}\)               | \(\mathbb{Z}\)   | \(\lfloor3.7\rfloor=3\)     |
| Ceiling     | \(\lceil x\rceil\)       | \(\mathbb{R}\)               | \(\mathbb{Z}\)   | \(\lceil3.2\rceil=4\)       |
| Mod         | \(a\bmod b\)             | \(a,b\in\mathbb{Z}, b\neq0\) | Depends on \(b\) | \(17\bmod5=2\)              |
| Div         | \(a\operatorname{div}b\) | \(a,b\in\mathbb{Z}, b\neq0\) | \(\mathbb{Z}\)   | \(17\operatorname{div}5=3\) |

### Relationship Between `div` and `mod`

For integers \(a\) and \(b\), \(b\neq0\):

$$
\boxed{a=(a\operatorname{div}b)b+(a\bmod b)}
$$

For example:

$$
17=(17\operatorname{div}5)(5)+(17\bmod5)
$$

$$
17=3(5)+2
$$

Therefore:

$$
\boxed{17\operatorname{div}5=3}
$$

$$
\boxed{17\bmod5=2}
$$
