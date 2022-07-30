import Node from './Node'

interface Callback {
    (element: Node, index: number): void
}

class LinkedList {
    public head: any
    public size: number
    constructor() {
        this.head = null
        this.size = 0
    }

    append(element: any): void {
        let node: Node = new Node(element)
        if (this.head === null) {
            this.head = node
        } else {
            let current: Node = this.getNode(this.size - 1)
            current.next = node
        }
        this.size++
    }

    appendAt(element: any, index: number): unknown {
        if (index < 0 || index > this.size) {
            return new Error('index out error')
        }

        let node: Node = new Node(element)
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

    removeAt(index: number): unknown {
        if (index < 0 || index >= this.size) {
            return new Error('index out error')
        }
        if (index === 0) {
            this.head = this.getNode(index + 1)
        } else {
            let prev: Node = this.getNode(index - 1)
            prev.next = prev.next.next
        }
        this.size--
    }

    indexOf(element: any): number {
        let current: Node = this.head
        for (let i = 0; i < this.size; i++) {
            if (current.element === element) {
                return i
            }
            current = current.next
        }
        return -1
    }

    getNode(index: number): any {
        if (index < 0 || index >= this.size) {
            return new Error('index out error')
        }
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    forEach(callback: Callback) {
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            callback(current.element, i)
            current = current.next
        }
    }
}

export default LinkedList
