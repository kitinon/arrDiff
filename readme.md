## How many ways you can diff two arrays?

### 1) First version
Basically, takes out all elements of Array1 that also exists in Array2 and vice versa.  This version is our baseline.  The complexity of this algorithem is O(N^2).

### 2) Map version
Using the elements of array as keys in a map, we can check quickly if we already have this element before.  Thank to hashing table in the map implementation, we can reduce to O(N•log(N)).

### 3) Set version
Using set opeation, we actually want (A ∪ B) - (A ∩ B).  Since set is using array inside, the complexity is also O(N^2) but this implementation is using roughly half the time of version 1).

### 4) New array version
Sorting both arrays then starting from the head of both array selecting only elements that has no equal element on the other array.  In this way the complexity is only O(N) but sorting of array is O(N•log(N)), so it is still O(N•log(N)).  But this implementation is roughly 30% better than the map version.

### Try it
npm install

npm test

npm run