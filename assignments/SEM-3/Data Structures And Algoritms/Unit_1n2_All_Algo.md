**Linear Search**

**Algorithm:**

1. Set I = 0
2. Repeat Steps 3 to 4 while I < N
3. If (A[I] == Key) then print "Found at I" and Exit
4. Set I = I + 1
5. Print "Not Found"
6. Stop

**Explanation:** Linear search is the most straightforward searching method. It works by checking every single element in the array one by one from the beginning until it finds a match or reaches the end. It does not require the array to be sorted.

**Code:**

```cpp
#include <iostream>
using namespace std;

void linearSearch(int A[], int N, int Key) {
    for (int I = 0; I < N; I++) {
        if (A[I] == Key) {
            cout << "Found at index " << I << endl;
            return;
        }
    }
    cout << "Not Found" << endl;
}

```

---

**Binary Search**

**Algorithm:**

1. Set Low = 0 and High = N - 1
2. Repeat Steps 3 to 6 while Low <= High
3. Set Mid = (Low + High) / 2
4. If (A[Mid] == Key) then print "Found at Mid" and Exit
5. If (A[Mid] < Key) then Set Low = Mid + 1
6. Else Set High = Mid - 1
7. Print "Not Found"
8. Stop

**Explanation:** Binary search uses a "divide and conquer" approach and strictly requires the array to be sorted beforehand. It compares the target value to the middle element; if they aren't equal, it eliminates the half in which the target cannot lie and repeats the search on the remaining half.

**Code:**

```cpp
#include <iostream>
using namespace std;

void binarySearch(int A[], int N, int Key) {
    int Low = 0, High = N - 1;
    while (Low <= High) {
        int Mid = (Low + High) / 2;
        if (A[Mid] == Key) {
            cout << "Found at index " << Mid << endl;
            return;
        }
        if (A[Mid] < Key) {
            Low = Mid + 1;
        } else {
            High = Mid - 1;
        }
    }
    cout << "Not Found" << endl;
}

```

---

**Bubble Sort**

**Algorithm:**

1. Repeat Steps 2 to 4 for I = 0 to N - 1
2. Repeat Steps 3 to 4 for J = 0 to N - I - 2
3. If (A[J] > A[J+1]) then
4. Swap A[J] and A[J+1]
5. Stop

**Explanation:** Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted. The largest unsorted element "bubbles" up to its correct position at the end of the array during each pass.

**Code:**

```cpp
#include <iostream>
using namespace std;

void bubbleSort(int A[], int N) {
    for (int I = 0; I < N - 1; I++) {
        for (int J = 0; J < N - I - 1; J++) {
            if (A[J] > A[J + 1]) {
                int temp = A[J];
                A[J] = A[J + 1];
                A[J + 1] = temp;
            }
        }
    }
}

```

---

**Selection Sort**

**Algorithm:**

1. Repeat Steps 2 to 6 for I = 0 to N - 1


2. Set pos = I and min = A[pos]


3. Repeat Steps 4 to 5 for J = I + 1 to N - 1


4. If (A[J] < min) then
5. Set min = A[J] and pos = J
6. Swap A[I] and A[pos]
7. Stop

**Explanation:** Selection sort divides the array into a sorted and an unsorted part. It searches the entire unsorted section to find the absolute minimum value, and then swaps that minimum value into the first available position of the sorted section.

**Code:**

```cpp
#include <iostream>
using namespace std;

void selectionSort(int A[], int N) {
    for (int I = 0; I < N - 1; I++) {
        int pos = I;
        int min = A[pos];
        for (int J = I + 1; J < N; J++) {
            if (A[J] < min) {
                min = A[J];
                pos = J;
            }
        }
        int temp = A[I];
        A[I] = A[pos];
        A[pos] = temp;
    }
}

```

---

**Insertion Sort**

**Algorithm:**

1. Repeat Steps 2 to 6 for I = 1 to N - 1
2. Set temp = A[I]
3. Set J = I - 1
4. Repeat Steps 5 to 6 while (J >= 0 and temp < A[J])
5. Set A[J+1] = A[J]
6. Set J = J - 1
7. Set A[J+1] = temp
8. Stop

**Explanation:** Insertion sort builds the final sorted array one item at a time. It takes an element from the unsorted part and compares it backwards against the already sorted elements, shifting larger elements to the right to make a space to "insert" the new element in its proper place.

**Code:**

```cpp
#include <iostream>
using namespace std;

void insertionSort(int A[], int N) {
    for (int I = 1; I < N; I++) {
        int temp = A[I];
        int J = I - 1;
        while (J >= 0 && temp < A[J]) {
            A[J + 1] = A[J];
            J = J - 1;
        }
        A[J + 1] = temp;
    }
}

```

---

**Stack Operations (Push and Pop)**

**Push Algorithm:**

1. If (Top == Max - 1) then print "Overflow" and Exit
2. Set Top = Top + 1
3. Set Stack[Top] = Item
4. Stop

**Pop Algorithm:**

1. If (Top == -1) then print "Underflow" and Exit
2. Set Item = Stack[Top]
3. Set Top = Top - 1
4. Stop

**Explanation:** A stack follows a Last-In-First-Out (LIFO) structure. The `Push` operation adds an item to the top after verifying the array has space (preventing Overflow). The `Pop` operation removes the most recent item from the top after verifying the array isn't empty (preventing Underflow).

**Code:**

```cpp
#include <iostream>
using namespace std;

int Stack[100];
int Top = -1;
int Max = 100;

void push(int Item) {
    if (Top == Max - 1) {
        cout << "Overflow" << endl;
        return;
    }
    Top = Top + 1;
    Stack[Top] = Item;
}

void pop() {
    if (Top == -1) {
        cout << "Underflow" << endl;
        return;
    }
    int Item = Stack[Top];
    Top = Top - 1;
    cout << "Popped: " << Item << endl;
}

```

---

**Fibonacci Sequence**

**Algorithm:**

1. Set A = 0 and B = 1
2. Print A, B
3. Repeat Steps 4 to 6 for I = 2 to N - 1
4. Set Next = A + B
5. Print Next
6. Set A = B and B = Next
7. Stop

**Explanation:** This generates a sequence where each number is the sum of the two preceding ones. It starts with base values 0 and 1, calculates their sum, prints it, and then shifts the variables forward to calculate the next cycle.

**Code:**

```cpp
#include <iostream>
using namespace std;

void fibonacci(int N) {
    if (N >= 1) cout << "0 ";
    if (N >= 2) cout << "1 ";
    
    int A = 0, B = 1;
    for (int I = 2; I < N; I++) {
        int Next = A + B;
        cout << Next << " ";
        A = B;
        B = Next;
    }
    cout << endl;
}

```

---

**Tower of Hanoi**

**Algorithm:**

1. If N == 1 then move disk from Source to Dest and Exit
2. Call Tower of Hanoi (N-1, Source, Dest, Helper)
3. Move disk N from Source to Dest
4. Call Tower of Hanoi (N-1, Helper, Source, Dest)
5. Stop

**Explanation:** This is a recursive algorithm that moves disks between rods. It works by reducing the problem: moving the top N-1 disks out of the way to a helper rod, moving the largest bottom disk to the destination, and then recursively moving the N-1 disks from the helper rod on top of the largest disk.

**Code:**

```cpp
#include <iostream>
using namespace std;

// char variables represent the names of the rods (e.g., 'A', 'B', 'C')
void towerOfHanoi(int N, char Source, char Helper, char Dest) {
    if (N == 1) {
        cout << "Move disk 1 from " << Source << " to " << Dest << endl;
        return;
    }
    towerOfHanoi(N - 1, Source, Dest, Helper);
    cout << "Move disk " << N << " from " << Source << " to " << Dest << endl;
    towerOfHanoi(N - 1, Helper, Source, Dest);
}

```
