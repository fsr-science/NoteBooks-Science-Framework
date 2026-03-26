# Detailed Notes: Chapter 1 - Sets

## 1. Introduction to Sets
*   **Origin:** The theory of sets was primarily developed by the German mathematician **Georg Cantor** (1845–1918) while working on trigonometric series [1-3].
*   **Significance:** Sets are fundamental to modern mathematics and are used to define concepts like relations, functions, probability, and sequences [1, 2, 4].
*   **Definition:** A set is a **well-defined collection of objects** [5, 6]. "Well-defined" means one can definitely decide whether a particular object belongs to the collection or not [7].

## 2. Representation of Sets
Sets are usually denoted by capital letters ($A, B, C, X, Y, Z$) and their elements by small letters ($a, b, c, x, y, z$) [8].
*   **Notation:** 
    *   If '$a$' is an element of set $A$, we write **$a \in A$** (a belongs to A) [8].
    *   If '$b$' is not an element of $A$, we write **$b \notin A$** [8].
*   **Methods of Representation:**
    1.  **Roster or Tabular Form:** All elements are listed, separated by commas, and enclosed in braces $\{ \}$ [9]. 
        *   The **order** of elements is immaterial [10].
        *   Elements are generally **not repeated** [11, 12].
        *   Infinite sets can be shown with three dots ($...$) if they follow a pattern, though some (like Real numbers) cannot be described this way [10, 13, 14].
    2.  **Set-builder Form:** Elements are described by a **single common property** that no element outside the set possesses [11]. Format: $\{x : x \text{ has property } P\}$ [15].

## 3. Standard Mathematical Sets
*   **$\mathbb{N}$:** Set of all natural numbers [7].
*   **$\mathbb{Z}$:** Set of all integers [7].
*   **$\mathbb{Q}$:** Set of all rational numbers [7, 16].
*   **$\mathbb{R}$:** Set of real numbers [7].
*   **$\mathbb{T}$:** Set of irrational numbers [17].
*   **$\mathbb{Z}^+, \mathbb{Q}^+, \mathbb{R}^+$:** Sets of positive integers, rational numbers, and real numbers, respectively [5].

## 4. Types of Sets
*   **Empty Set (Null/Void Set):** A set containing **no elements**, denoted by **$\phi$** or **$\{ \}$** [6, 18].
*   **Finite Set:** A set that is empty or consists of a **definite number of elements** [6, 19].
*   **Infinite Set:** A set where the number of elements is not finite [6, 19].
*   **Equal Sets:** Two sets $A$ and $B$ are equal ($A = B$) if they have **exactly the same elements** [20, 21].

## 5. Subsets and Intervals
*   **Subset:** $A$ is a subset of $B$ ($A \subset B$) if **every element of $A$ is also an element of $B$** [21, 22].
    *   Every set is a subset of itself ($A \subset A$) [23].
    *   The empty set is a subset of every set ($\phi \subset A$) [23, 24].
*   **Proper Subset & Superset:** If $A \subset B$ and $A \neq B$, then $A$ is a **proper subset** and $B$ is the **superset** [24].
*   **Singleton Set:** A set with only one element [24].
*   **Intervals as Subsets of $\mathbb{R}$:**
    *   **Open Interval $(a, b)$:** $\{x : a < x < b\}$; endpoints not included [17, 25].
    *   **Closed Interval $[a, b]$:** $\{x : a \leq x \leq b\}$; endpoints included [25].
    *   **Semi-open/closed:** $(a, b]$ or $[a, b)$ [25].
*   **Universal Set ($U$):** A basic set containing all objects under consideration in a particular context [26].

## 6. Venn Diagrams and Operations
**Venn Diagrams** use rectangles for the universal set and circles for its subsets to represent relationships visually [27, 28].

### Core Operations:
1.  **Union ($A \cup B$):** The set of elements that are in **either $A$ or $B$** (or both) [21, 29, 30].
2.  **Intersection ($A \cap B$):** The set of elements **common to both $A$ and $B$** [21, 31, 32].
    *   **Disjoint Sets:** If $A \cap B = \phi$ [33].
3.  **Difference ($A - B$):** The set of elements belonging to **$A$ but not to $B$** [21, 34, 35].
4.  **Complement ($A'$):** If $A$ is a subset of $U$, $A'$ is the set of all elements in $U$ that are **not in $A$** ($A' = U - A$) [21, 36].

## 7. Key Laws of Set Algebra
*   **Commutative Laws:** $A \cup B = B \cup A$; $A \cap B = B \cap A$ [33, 37].
*   **Associative Laws:** $(A \cup B) \cup C = A \cup (B \cup C)$; $(A \cap B) \cap C = A \cap (B \cap C)$ [33, 37].
*   **Distributive Law:** $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ [34].
*   **De Morgan’s Laws:**
    *   $(A \cup B)' = A' \cap B'$ [3, 38].
    *   $(A \cap B)' = A' \cup B'$ [3, 38].
*   **Double Complementation:** $(A')' = A$ [39, 40].
*   **Identity Laws:** $A \cup \phi = A$; $A \cap U = A$ [33, 37].