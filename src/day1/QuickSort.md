## QuickSort Algorithm  O(N logN) - O(N^2)

QuickSort is using the divide-and-conquere approach where we are selecting an element as a pivot and partitioning the other elements into two sub-arrays, and then comparing them to whether they are less than or greater than the pivot.

1. Choose a pivot element from the array.
2. Partition the array into two sub-arrays, such that all elements less than the pivot are in one sub-array and all elements greater than the pivot are in the other sub-array. The pivot should be placed in its final position within the sorted array.
3. Recursively apply the QuickSort algorithm to the sub-arrays.


The QuickSort can be slow if the array is reversed sorted

E.g. for QuickSort:

 0. We have chosen the last index as our pivot
               P
 [ 6, 7, 6, 4, 5 ]

 1. We are checking if any of the items are smaller than our P point and if they are, we are putting them in the beginning of the array or swapping it with our idx
               P
 [ 4, 7, 8, 6, 5 ]
 - Swapping 4 and 8

 2. We have walked the whole array then move P point to last idx we swapoed + 1
      P        
 [ 4, 5, 8, 6, 7 ]
 - We swapped only one item, so our index is 1

 3. Next we are separating both left and right side to separate arrays without pivot and reciting the previous steps

      P        
 [ 4, 5, 8, 6, 7 ]

 ----------------------

     Our last pivot(is sorted)
            V
            5              P
 [ 4 ]      -      [8, 6, 7 ]
 Sorted...      ...swap 6 to first index

            5             P
 [ 4 ]      -      [6, 8, 7 ]
 Sorted...       ... Move pivot and split arrays

            5               7
 [ 4 ]      -      [ 6 ]      -      [ 8 ] 
 Sorted...      Sorted...           Sorted...

 




