## Arrays vs Linked List

# Accesing memory
* Arrays:
allows us to quickly acces memory in the middle of the array.

* Linked List:
We have to walk from point to point.


# Append and Prepend
* Arrays:
In arrays append or prepend can be very costly since we have to move all the items.

* Linked List:
It's very fast since we only have to adapt our pointers


# remove, get, insertAt, removeAt
* Arrays:
Timewise, arrays are really nice O(1) everything...

* Linked List:
Slower, we have to walk through nodes... 


## Array List

In Array List, we have array access with the ability to grow.

- Eg.
 [ 2, null, null ]    L:1
 0               3    C:3


- pushing If cap is full:
 [ 2, 3, 4 ]     L:3
 0         3     C:3
      V
 [ 2, 3, 4, 5, null, null ]     L:4
 0                        6     C:6


- enqueue(If cap is full -> mem copy arr), dequeue, and removing items cost us moving items to the right spots O(N)

## Array Buffers

simular to Array List but the only differenct is that we dont use 0 for tail and length for head, insted we have index base head and tail


[null, null, 2, 3, 4, null, null ]     L:3
             V     V                   C:7
            Tail  Head
Or 
[3, 4, null, null, null, 1, 2 ]     L:4
    V                    V          C:7
   Head                 Tail  


it helps us with enqueue, dequeue, and removing items since we dont have to move all the items.