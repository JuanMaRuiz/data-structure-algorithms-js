## Stack

Stacks is a linear data structure which follows a particular order in which the operations are performed. The order may be **LIFO** (Last Input First Ouput) or **FILO** (First In Last Out).

The basics operations performed in the stack are:

* **Push**.- Adds an item in the stack. If the stack is full, then it is said to be an overflow condition
* **Pop**.- Removes an item from the stack. If the stack is empty it is said to an underflow condition.
* **Peek (or Top)**.- Returns top element of the stack.
* **isEmpty** Returns `true` if stack is empty, else false.
* **Size**.- Returns the length of the stack.

### How to implement in JS

There is no a `Stack` data structure natively in JS, we use arrays for that purpose, but there are several methods that are not built-in in JS array object.

Let's see how we could implement `Stack` data structure in Javascript:

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