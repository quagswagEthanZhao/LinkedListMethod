//10 --> 5 -- 16;
class INode {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.taile = this.head;
        this.length = 1;
    }
    printList() {
        const array = [];
        let currentList = this.head;
        while (currentList !== null) {
            array.push(currentList.value);
            currentList = currentList.next;
        }
        return array;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.taile.next = newNode;
        this.taile = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        //Check params
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new INode(value);
        const leader = this.traverToIndex(index - 1);
        const holdingPointer = leader.next; // save the rest of the nums
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    traverToIndex(index) {
        let currentNode = this.head;
        for (var i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}

const myLittleLinkedList = new LinkedList(6);
myLittleLinkedList.prepend(10);
myLittleLinkedList.append(20);
myLittleLinkedList.append(30);
console.log(myLittleLinkedList.insert(1, 2));



