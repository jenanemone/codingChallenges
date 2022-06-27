/*
    TODO: Implement a stack data structure in JavaScript.

    The stack should support the following operations:
    - pop() - removes the top element of the stack
    - push(element) - adds an element to the top of the stack
    
    Bonus questions: Write some tests to verify that it works.
 
 */

// create push method that has a parameter 

class Stack {
    constructor() {
        this._internal = [];
    }

    push(item) {
        this._internal[this._internal.length] = item
    }

    pop() {
        const lastItem = this._internal[this._internal.length - 1]
        this._internal = this._internal.slice(0, this._internal.length - 1)
        return lastItem
    }
}

const myStack = new Stack();
console.log(myStack)
myStack.push(1);
myStack.push(2);
myStack.push(4);
console.log(myStack.pop()) // 4
console.log(myStack.pop()) // 2