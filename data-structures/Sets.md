## Sets

A `set` is a data structure that can store any number of **unique** values in any order you so wish. So it's similar to arrays, the may difference is that `Sets` doesn't allow duplicated items.

Acording with mdn documentation:

> The `Set` object lets you store unique values of any type.

ES6 has built-in `Sets` data structures but it has not all the methods that we are going to see in this example. So we will build a new `Set` Class

The basics operations performed in the stack are:

* **has**.- This method will check the presence of an element and return `true` of `false`.
* **values**.- This method will return all the values in the set.
* **add**.- This method add a new element from the set.
* **remove**.- This method removes an element from the set.
* **size**.- This method will return the size of the collection.
* **union**.- This method will return the union of to sets.
* **intersection**.- This method will return the intersection of two sets in a new set.
* **difference**.-  This method will return the difference of two sets in a new set.
* **subset**.- This method will test if the set is a subset of a difference set.

### How to implement Set in JS

There is no a stack data structure natively in JS, we use arrays for that purpose, but there are several methods that are not built-in in JS array object.

Let's see how we could implement `Sets` data structure in Javascript:

```javascript
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    size(){
        return this.count;
    }
    // Removes the last element and returns the value at the end of the stack
    pop() {
        let result;
        if (this.size === 0 ) {
            return undefined;
        }
        this.count--;
        result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    // Adds a new element at the end of the stack
    push(value){
        this.items[this.count] = value;
        this.count++;
    }

    peek(){
        return this.items[this.count-1];
    }

    isEmpty(){
        return this.count === 0;
    }
}
```

_**Source code [here]('./../src/Stack.js')**_