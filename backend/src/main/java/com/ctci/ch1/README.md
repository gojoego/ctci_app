# chapter 1 - arrays and strings 

## hash tables 

* data structure that maps keys to values for highly efficient lookup 

* implementation 

1. compute hash code 
2. map hash code to index in array

   hash(key) % array_length

3. store key and value in linked list at index 

retrieval: hash code -> key, compute index, search list for key

high collisions O(n), n = number of keys 

good implementation O(1) lookup 

binary search tree lookup O(logn)

## ArrayList / resizable arrays 

array size cannot change after creation 

use ArrayList for dynamic resizing 

amortized insertion runtime O(1) on average but O(n) worst case 

## StringBuilder

concatenating strings takes O(n * n) because new copy of string created, copied 
over and over again, char by char 

StringBuilder helps avoid this by creating resizable array of strings, copying them back to string only when necessary 

### TODO
- practice by implementing own version of StringBuilder HashTable and ArrayList 
- review hash table collision resolution 
- review Rabin-Karp Substring Search 
