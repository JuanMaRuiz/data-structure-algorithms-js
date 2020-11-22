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

module.exports = Stack;