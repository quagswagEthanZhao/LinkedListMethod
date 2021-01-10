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

const stack = new CllStackArray;
stack.push('Hello');
stack.push('Second Item');
console.log(stack.push('Third Item'));

