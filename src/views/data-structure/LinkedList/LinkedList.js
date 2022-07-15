// eslint-disable-next-line max-classes-per-file
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    append(element) {
        let node = new Node(element)
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.getNode(this.size - 1)
            current.next = node
        }
        this.size++
    }

    appendAt(element, index) {
        if (index < 0 || index > this.size) {
            return new Error('index out error')
        }

        let node = new Node(element)
        if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let prev = this.getNode(index - 1)
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return new Error('index out error')
        }
        if (index === 0) {
            this.head = this.getNode(index + 1)
        } else {
            let prev = this.getNode(index - 1)
            prev.next = prev.next.next
        }
        this.size--
    }

    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            if (current.element === element) {
                return i
            }
            current = current.next
        }
    }

    getNode(index) {
        if (index < 0 || index >= this.size) {
            return new Error('index out error')
        }
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    forEach(callback) {
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            callback(current.element, i)
            current = current.next
        }
    }
}

const linkedList = new LinkedList()
linkedList.append('1')
linkedList.append('2')
linkedList.append('3')
linkedList.append('4')
linkedList.appendAt('99', 0)
linkedList.appendAt('55', 5)
linkedList.appendAt('33', 2)
linkedList.removeAt(0)
linkedList.removeAt(1)
const indexOf2 = linkedList.indexOf('3')
console.dir(linkedList, {
    depth: 100
})

console.log('index of ', indexOf2)

linkedList.forEach((i, idx) => {
    console.log(idx, ' --- i -- ', i)
})
