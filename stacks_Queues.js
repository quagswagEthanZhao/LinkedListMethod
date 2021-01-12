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
        if (this.top == this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;//In case still need the access to it
        const tempHead = this.top.next;
        this.top = tempHead;
        this.length--;
        return this;
    }
}

//Array
class CllStackArray {
    constructor() {
        this.stack = [],
            this.head = null,
            this.bottom = null,
            this.length = null
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    push(value) {
        this.stack.push(value);
        this.head = this.stack[this.stack.length - 1];
        this.bottom = this.stack[0];
        this.length = this.stack.length;
        return this;
    }

    pop() {
        this.stack.pop();
        this.head = this.stack[this.stack.length - 1];
        this.bottom = this.stack[0];
        this.length = this.stack.length;
        return this;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
            this.length = 1;
        } else {
            this.last.next = newNode;
            this.last = newNode;
            this.length++;
        }
        return this;
    }
    dequeue() {
        if (!this.first) {
            return 'Empty queue';
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const holdingFirst = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myqueue = new Queue;


