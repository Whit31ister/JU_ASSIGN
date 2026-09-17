# Data Structures and Algorithm — Tutorial Sheet 2

**B.Tech. (Computer Science and Engineering)**
**Semester:** III
**Subject Code:** BCO002B
**Unit:** 1
**Marks:** 64

The questions below are based on Tutorial Sheet 2. 

---

# Section A

## A1. Define Data Structure with a suitable example. How is it different from an Algorithm?

A **Data Structure** is a method of organizing and storing data in memory so that it can be accessed and manipulated efficiently.

### Example

An array:

$$
A=[10,20,30,40,50]
$$

stores elements in contiguous memory locations and allows direct access using an index.

An **Algorithm** is a finite sequence of well-defined steps used to solve a particular problem.

For example, an algorithm for finding the maximum element in an array compares the elements one by one and keeps track of the largest value.

### Difference

| Data Structure                              | Algorithm                                     |
| ------------------------------------------- | --------------------------------------------- |
| Organizes and stores data.                  | Provides steps to solve a problem.            |
| Concerned with data representation.         | Concerned with problem-solving procedure.     |
| Examples: array, stack, queue, tree.        | Examples: Binary Search, Insertion Sort, BFS. |
| Determines how data is stored and accessed. | Determines how operations are performed.      |

Thus:

$$
\boxed{\text{Data Structure = organization of data}}
$$

$$
\boxed{\text{Algorithm = procedure for solving a problem}}
$$

---

## A2. Define Big-Oh \(O\) and Big-Omega \(\Omega\) notation in one line each.

### Big-Oh

$$
\boxed{
f(n)=O(g(n))
\iff
\exists c>0,\exists n_0>0\text{ such that }0\leq f(n)\leq c\,g(n),\ \forall n\geq n_0
}
$$

It represents an asymptotic upper bound.

### Big-Omega

$$
\boxed{
f(n)=\Omega(g(n))
\iff
\exists c>0,\exists n_0>0\text{ such that }0\leq c\,g(n)\leq f(n),\ \forall n\geq n_0
}
$$

It represents an asymptotic lower bound.

---

## A3. What is meant by the "Notion of Complexity" of an algorithm?

The **notion of complexity** refers to the amount of computational resources required by an algorithm as a function of input size \(n\).

The two main measures are:

### Time Complexity

It measures how the number of computational operations grows with \(n\).

Examples:

$$
O(n),\qquad O(n\log n),\qquad O(n^2)
$$

### Space Complexity

It measures how the memory requirement grows with \(n\).

Thus, complexity analysis allows algorithms to be compared independently of a particular machine or programming language.

---

## A4. State the basic idea of Selection Sort.

Selection Sort divides the array into two parts:

1. A sorted portion.
2. An unsorted portion.

At every pass, the smallest element from the unsorted portion is selected and exchanged with the first element of that portion.

For an array:

$$
A[0],A[1],\ldots,A[n-1]
$$

at pass \(i\), find:

$$
\min\{A[i],A[i+1],\ldots,A[n-1]\}
$$

and place it at position \(i\).

After \(n-1\) passes, the array is sorted.

---

## A5. What is meant by the Lower Bound of a sorting algorithm?

The **lower bound** specifies the minimum amount of work that must be performed by any algorithm belonging to a particular problem class.

For comparison-based sorting algorithms, the lower bound in the worst case is:

$$
\boxed{\Omega(n\log n)}
$$

comparisons.

This means that no comparison-based sorting algorithm can guarantee fewer than asymptotically \(n\log n\) comparisons in the worst case.

---

# Section B

## B1. Explain Theta \(\Theta\) notation formally and show that \(f(n)=\Theta(g(n))\).

The question asks for a formal explanation of \(\Theta\) notation and an example. 

### Formal Definition

A function \(f(n)\) is said to be:

$$
f(n)=\Theta(g(n))
$$

if there exist positive constants \(c_1,c_2\) and \(n_0\) such that:

$$
\boxed{
0\leq c_1g(n)\leq f(n)\leq c_2g(n)
}
$$

for every:

$$
n\geq n_0
$$

Thus, \(\Theta\) gives both an asymptotic upper bound and a lower bound.

---

### Example

Let:

$$
f(n)=3n^2+5n+7
$$

and:

$$
g(n)=n^2
$$

We need to find \(c_1,c_2,n_0\) such that:

$$
c_1n^2\leq3n^2+5n+7\leq c_2n^2
$$

### Lower Bound

For \(n\geq1\):

$$
3n^2+5n+7\geq3n^2
$$

Therefore, choose:

$$
c_1=3
$$

### Upper Bound

For \(n\geq1\):

$$
5n\leq5n^2
$$

and:

$$
7\leq7n^2
$$

Therefore:

$$
3n^2+5n+7
\leq
3n^2+5n^2+7n^2
$$

$$
=15n^2
$$

Choose:

$$
c_2=15
$$

and:

$$
n_0=1
$$

Hence:

$$
3n^2\leq3n^2+5n+7\leq15n^2
$$

Therefore:

$$
\boxed{3n^2+5n+7=\Theta(n^2)}
$$

---

## B2. Trace Bubble Sort and Selection Sort on \([12,45,3,67,21,9,55]\), and compare comparisons and swaps.

The given array is: 

$$
A=[12,45,3,67,21,9,55]
$$

---

# Bubble Sort

Bubble Sort compares adjacent elements and swaps them if they are in the wrong order.

### Pass 1

Start:

$$
[12,45,3,67,21,9,55]
$$

After comparing and swapping:

$$
\boxed{[12,3,45,21,9,55,67]}
$$

Comparisons:

$$
6
$$

Swaps:

$$
4
$$

### Pass 2

$$
\boxed{[3,12,21,9,45,55,67]}
$$

Comparisons:

$$
5
$$

Swaps:

$$
3
$$

### Pass 3

$$
\boxed{[3,12,9,21,45,55,67]}
$$

Comparisons:

$$
4
$$

Swaps:

$$
1
$$

### Pass 4

$$
\boxed{[3,9,12,21,45,55,67]}
$$

Comparisons:

$$
3
$$

Swaps:

$$
1
$$

### Pass 5

$$
\boxed{[3,9,12,21,45,55,67]}
$$

Comparisons:

$$
2
$$

Swaps:

$$
0
$$

### Pass 6

$$
\boxed{[3,9,12,21,45,55,67]}
$$

Comparisons:

$$
1
$$

Swaps:

$$
0
$$

### Bubble Sort Totals

Total comparisons:

$$
6+5+4+3+2+1=21
$$

Total swaps:

$$
4+3+1+1+0+0=9
$$

Therefore:

$$
\boxed{\text{Bubble Sort comparisons}=21}
$$

$$
\boxed{\text{Bubble Sort swaps}=9}
$$

---

# Selection Sort

Selection Sort selects the minimum element from the unsorted section during every pass.

### Pass 1

Initial:

$$
[12,45,3,67,21,9,55]
$$

Minimum:

$$
3
$$

Swap \(3\) with \(12\):

$$
\boxed{[3,45,12,67,21,9,55]}
$$

Comparisons:

$$
6
$$

Swaps:

$$
1
$$

### Pass 2

Unsorted section:

$$
[45,12,67,21,9,55]
$$

Minimum:

$$
9
$$

Swap \(9\) with \(45\):

$$
\boxed{[3,9,12,67,21,45,55]}
$$

Comparisons:

$$
5
$$

Swaps:

$$
1
$$

### Pass 3

Unsorted section:

$$
[12,67,21,45,55]
$$

Minimum:

$$
12
$$

Already in the correct position:

$$
\boxed{[3,9,12,67,21,45,55]}
$$

Comparisons:

$$
4
$$

Swaps:

$$
0
$$

### Pass 4

Minimum of:

$$
[67,21,45,55]
$$

is:

$$
21
$$

After swapping:

$$
\boxed{[3,9,12,21,67,45,55]}
$$

Comparisons:

$$
3
$$

Swaps:

$$
1
$$

### Pass 5

Minimum of:

$$
[67,45,55]
$$

is:

$$
45
$$

After swapping:

$$
\boxed{[3,9,12,21,45,67,55]}
$$

Comparisons:

$$
2
$$

Swaps:

$$
1
$$

### Pass 6

Minimum of:

$$
[67,55]
$$

is:

$$
55
$$

After swapping:

$$
\boxed{[3,9,12,21,45,55,67]}
$$

Comparisons:

$$
1
$$

Swaps:

$$
1
$$

### Selection Sort Totals

Total comparisons:

$$
6+5+4+3+2+1=21
$$

Total swaps:

$$
1+1+0+1+1+1=5
$$

Therefore:

$$
\boxed{\text{Selection Sort comparisons}=21}
$$

$$
\boxed{\text{Selection Sort swaps}=5}
$$

### Comparison

| Algorithm      | Comparisons | Swaps |
| -------------- | ----------: | ----: |
| Bubble Sort    |      \(21\) | \(9\) |
| Selection Sort |      \(21\) | \(5\) |

For this particular input:

$$
\boxed{\text{Both make 21 comparisons, but Selection Sort makes fewer swaps.}}
$$

---

## B3. Explain why choosing appropriate algorithms and data structures matters in real-world programming. Illustrate with finding the maximum element in an array.

The tutorial sheet asks for the importance of suitable algorithms/data structures and a complexity derivation using an example such as finding the maximum element. 

The selection of an appropriate algorithm and data structure affects:

* execution time,
* memory usage,
* scalability,
* maintainability,
* and overall system performance.

An algorithm that works well for a small input may become inefficient for a very large input.

For example, consider an array:

$$
A=[a_0,a_1,\ldots,a_{n-1}]
$$

and suppose we want to find its maximum element.

### Algorithm

```text id="8n3p4w"
MAXIMUM(A, n)

1. max = A[0]
2. for i = 1 to n - 1
3.     if A[i] > max
4.         max = A[i]
5. return max
```

### Time Complexity

The loop executes:

$$
n-1
$$

times.

Each iteration performs a constant amount of work.

Therefore:

$$
T(n)=c(n-1)+d
$$

where \(c\) and \(d\) are constants.

Thus:

$$
\boxed{T(n)=\Theta(n)}
$$

### Space Complexity

Only the variables `max` and `i` require additional storage.

Therefore:

$$
\boxed{S(n)=\Theta(1)}
$$

### Importance

If we unnecessarily used a sorting algorithm first:

$$
A\rightarrow\text{Sort}(A)\rightarrow\text{last element}
$$

the complexity could become:

$$
O(n\log n)
$$

or:

$$
O(n^2)
$$

depending on the sorting algorithm.

For simply finding the maximum element, sorting is unnecessary. A linear scan is sufficient.

Hence, appropriate algorithm selection avoids unnecessary computation and memory usage.

---

# Section C

## C1. Analyse and compare Bubble Sort, Selection Sort and Insertion Sort with best-case, worst-case, average-case time complexity and space complexity.

The tutorial sheet explicitly asks for recurrence/count-based derivations and a summary comparison table. 

---

# 1. Bubble Sort

Bubble Sort compares adjacent elements repeatedly.

For \(n\) elements, the number of comparisons in a complete execution is:

$$
(n-1)+(n-2)+\cdots+1
$$

Using:

$$
\sum_{i=1}^{n-1}i=\frac{n(n-1)}{2}
$$

we obtain:

$$
T(n)=\frac{n(n-1)}{2}
$$

Therefore:

$$
\boxed{T(n)=\Theta(n^2)}
$$

### Best Case

For an already sorted array, an optimized Bubble Sort detects that no swap occurred during the first pass.

Comparisons:

$$
n-1
$$

Hence:

$$
\boxed{T_{\text{best}}(n)=\Theta(n)}
$$

### Worst Case

For reverse-sorted input:

$$
\boxed{T_{\text{worst}}(n)=\Theta(n^2)}
$$

### Average Case

For randomly ordered input:

$$
\boxed{T_{\text{average}}(n)=\Theta(n^2)}
$$

### Space

Bubble Sort can be performed in-place:

$$
\boxed{S(n)=\Theta(1)}
$$

---

# 2. Selection Sort

At position \(i\), Selection Sort searches the remaining \(n-i\) elements for the minimum.

The comparison count is:

$$
(n-1)+(n-2)+\cdots+1
$$

Therefore:

$$
T(n)=\frac{n(n-1)}{2}
$$

Hence:

$$
\boxed{T(n)=\Theta(n^2)}
$$

Importantly, this does not depend on whether the input is already sorted or reverse sorted.

Thus:

$$
\boxed{T_{\text{best}}(n)=\Theta(n^2)}
$$

$$
\boxed{T_{\text{average}}(n)=\Theta(n^2)}
$$

$$
\boxed{T_{\text{worst}}(n)=\Theta(n^2)}
$$

The number of swaps is at most:

$$
n-1
$$

### Space

Selection Sort is in-place:

$$
\boxed{S(n)=\Theta(1)}
$$

---

# 3. Insertion Sort

Insertion Sort inserts each element into its appropriate position in the already sorted prefix.

For the \(i\)-th insertion, at most \(i\) elements may need to be shifted.

Thus, in the worst case:

$$
T(n)\approx1+2+\cdots+(n-1)
$$

$$
=\frac{n(n-1)}{2}
$$

Hence:

$$
\boxed{T_{\text{worst}}(n)=\Theta(n^2)}
$$

### Best Case

When the array is already sorted, each element requires only one comparison with the preceding element.

Therefore:

$$
T(n)=n-1
$$

and:

$$
\boxed{T_{\text{best}}(n)=\Theta(n)}
$$

### Average Case

For random data, an element moves approximately halfway through the sorted prefix on average.

Thus:

$$
T(n)\approx
\frac12
\left(
1+2+\cdots+(n-1)
\right)
$$

$$
=
\frac12\cdot\frac{n(n-1)}{2}
$$

$$
=
\frac{n(n-1)}{4}
$$

Therefore:

$$
\boxed{T_{\text{average}}(n)=\Theta(n^2)}
$$

### Space

Insertion Sort is in-place:

$$
\boxed{S(n)=\Theta(1)}
$$

---

## Summary Comparison

| Algorithm      |       Best Case |    Average Case |      Worst Case | Auxiliary Space |
| -------------- | --------------: | --------------: | --------------: | --------------: |
| Bubble Sort*   |   \(\Theta(n)\) | \(\Theta(n^2)\) | \(\Theta(n^2)\) |   \(\Theta(1)\) |
| Selection Sort | \(\Theta(n^2)\) | \(\Theta(n^2)\) | \(\Theta(n^2)\) |   \(\Theta(1)\) |
| Insertion Sort |   \(\Theta(n)\) | \(\Theta(n^2)\) | \(\Theta(n^2)\) |   \(\Theta(1)\) |

$$
\boxed{*}
$$

The \(\Theta(n)\) best case for Bubble Sort assumes the optimized version with an early-termination condition. Without that optimization, Bubble Sort's best case is:

$$
\Theta(n^2)
$$

---

# C2. Explain the Top \(k\) Elements problem and give a method without Quick Sort, Merge Sort or Heap Sort.

The problem is to find the \(k\) largest elements from an unsorted array containing \(n\) elements, where:

$$
1\leq k\leq n
$$

The restrictions specifically exclude Quick Sort, Merge Sort and Heap Sort. 

## Method: Maintain a Sorted List of \(k\) Elements

We can maintain an auxiliary array \(T\) containing the current \(k\) largest elements in sorted order.

For every element \(x\) in the input:

1. Compare \(x\) with the current top-\(k\) elements.
2. Insert \(x\) into its correct position if necessary.
3. If \(T\) contains more than \(k\) elements, remove the smallest element.

### Pseudocode

```text id="0yq3ck"
TOP-K(A, n, k)

1. T = empty array
2. for each x in A:
3.     insert x into T in sorted order
4.     if size(T) > k:
5.         remove the smallest element from T
6. return T
```

### Example

Let:

$$
A=[12,5,27,8,31,19,40]
$$

and:

$$
k=3
$$

The final top three elements are:

$$
\boxed{[27,31,40]}
$$

### Time Complexity

Since \(T\) contains at most \(k\) elements, insertion into a simple array can require:

$$
O(k)
$$

time.

For all \(n\) elements:

$$
T(n)=O(nk)
$$

Therefore:

$$
\boxed{T(n)=O(nk)}
$$

Auxiliary space:

$$
\boxed{S(n)=O(k)}
$$

This approach does not use Quick Sort, Merge Sort, or Heap Sort.

---

# C3. Prove the lower bound of \(\Omega(n\log n)\) for comparison-based sorting algorithms and explain its significance.

The tutorial sheet asks for the decision-tree proof and its relationship to the quadratic sorting algorithms. 

## Comparison-Based Sorting

A comparison-based sorting algorithm determines the ordering of elements using comparisons such as:

$$
a_i<a_j
$$

or:

$$
a_i>a_j
$$

Examples include:

$$
\text{Bubble Sort, Selection Sort, Insertion Sort}
$$

---

## Decision Tree Model

A comparison-based sorting algorithm can be represented as a binary decision tree.

Each internal node corresponds to one comparison.

For example:

$$
a_i<a_j?
$$

The comparison has two possible outcomes, so each node has at most two branches.

Each leaf represents one possible final ordering of the input elements.

---

## Number of Possible Orderings

For \(n\) distinct elements, the number of possible permutations is:

$$
n!
$$

Therefore, a correct comparison-based sorting algorithm must have at least:

$$
n!
$$

different leaves in its decision tree.

Suppose the height of the tree is \(h\).

A binary tree of height \(h\) can contain at most:

$$
2^h
$$

leaves.

Therefore:

$$
2^h\geq n!
$$

Taking logarithm base \(2\):

$$
h\geq\log_2(n!)
$$

Using the standard asymptotic result:

$$
\log_2(n!)=\Theta(n\log n)
$$

Thus:

$$
h=\Omega(n\log n)
$$

Since each level represents one comparison:

$$
\boxed{
\text{Worst-case comparisons}
=
\Omega(n\log n)
}
$$

Therefore:

$$
\boxed{\text{Every comparison-based sorting algorithm requires }\Omega(n\log n)\text{ comparisons in the worst case.}}
$$

---

## Why This Lower Bound Matters

Bubble Sort, Selection Sort and Insertion Sort have:

$$
O(n^2)
$$

worst-case time complexity.

The lower bound tells us that a comparison-based sorting algorithm cannot have a worst-case complexity asymptotically better than:

$$
\Omega(n\log n)
$$

Therefore, the quadratic algorithms satisfy the lower bound but do not achieve the best asymptotic comparison complexity possible.

For large \(n\):

$$
n\log n<n^2
$$

asymptotically.

Hence algorithms such as Merge Sort and Heap Sort can achieve:

$$
\Theta(n\log n)
$$

worst-case comparison complexity, while Bubble Sort, Selection Sort, and Insertion Sort have:

$$
\Theta(n^2)
$$

worst-case complexity.

### Important Distinction

The lower bound is:

$$
\boxed{\Omega(n\log n)}
$$

It is **not**:

$$
O(n\log n)
$$

because \(O\) denotes an upper bound, whereas \(\Omega\) denotes a lower bound.

---

# Final Summary

| Concept                                | Result                                             |
| -------------------------------------- | -------------------------------------------------- |
| Big-Oh                                 | Asymptotic upper bound                             |
| Big-Omega                              | Asymptotic lower bound                             |
| Big-Theta                              | Tight asymptotic bound                             |
| Bubble Sort                            | Best \(\Theta(n)\)*, Average/Worst \(\Theta(n^2)\) |
| Selection Sort                         | Best/Average/Worst \(\Theta(n^2)\)                 |
| Insertion Sort                         | Best \(\Theta(n)\), Average/Worst \(\Theta(n^2)\)  |
| Top \(k\) using sorted auxiliary array | \(O(nk)\) time, \(O(k)\) space                     |
| Comparison-based sorting lower bound   | \(\Omega(n\log n)\)                                |

