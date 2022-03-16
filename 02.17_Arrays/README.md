# Array

primitive data type and non-primitive data type

Javascript arrays from 0 to (greatest index + 1)-->the length

use const to declear array so that the data type won't change. the element in array is still changeble.

## array.length

the length of array is changing dynamically

# Array Methods

- push() push a element to the end of an array 
- pop() delete the last element of the array

- unshift push some element to the beginning of the array
- shift removes the first item in array and returns it

with push() and unshift() can add more element one thime.

### slice(start, end)
start: includes, end: not includes
slice clone the array and create a new copy with the element in the zone which start and end with the index number

### splice()
splice change the orginnal array
```
splice(index, howMany to remove, replace[element1][, ..., elementN])
```

## concat() create a new array

## toString()

returns a comma-separated STring

## join()
it creates a string of array items joined by glue between them