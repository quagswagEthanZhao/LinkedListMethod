class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}

//Linked Lists
class Stack {
    constructor() {
        this.top = null,
            this.bottom = null,
            this.length = 0
    }

    peek() {
        //See top node;
        return this.top;
    }

    push(value) {
        //Add node to the top of the stack;
        const newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
            this.bottom = this.top;
            this.length++;
            return this;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp
            this.length++;
            return this;
        }
    }

    pop() {
        //Remove from the top of the stack;
        if (!this.top) return 'Empty Stack';
        const holdingPointer = this.top;//In case still need the access to it
        const tempHead = this.top.next;
        this.top = tempHead;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.push('Hello');
myStack.push('Second');
// console.log(myStack.push('Second'));
console.log(myStack.pop());
