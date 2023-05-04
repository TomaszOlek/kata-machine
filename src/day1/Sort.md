## Bubble Sort O(n^2)

we are going through the array and checking if the next item is bigger than the current one and swapping them if they are, for every run we can check one item less since it is always sorted.

## Linked List

It's a node-based data structure,

Type example: 
  node<T> 
   val: T
   next?: Node<T>
   prev?: Node<T>

nodes stores where the next and the previous element is allocated in memory 

Props:
- Deletions from the Head or Tail are very fast O(1)
- Getting Head and Tail is very fast O(1)
- prepend and append is fast O(1)

Cons: 
- Accessing memory is slower because we have to walk from point to point O(N)
- Deletions and insertion from/to the Middle might be slower since we have to walk again ... 


## Stack

It's similar to Queue but is reversed and only has head

A <- B <- C <- D
               ^
               Head

We are only adding and removing items from the head