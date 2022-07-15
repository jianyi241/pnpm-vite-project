/**
 * 循环队列 first in first out(先进先出)
 * @type {{new(): {enQueue(*): *, deQueue(): *}}}
 */
class CircleQueue {
    constructor(len) {
        this.array = new Array(len + 1)
        this.front = 0
        this.rear = 0
    }

    enQueue(element) {
        if (this.isFull()) {
            return new Error('queue is full.')
        }
        this.array[this.rear] = element
        this.rear = (this.rear + 1) % this.array.length
    }

    deQueue() {
        if (this.isEmpty()) {
            return new Error('queue is empty.')
        }
        let item = this.array[this.front]
        this.array[this.front] = undefined
        this.front = (this.front + 1) % this.array.length
        return item
    }

    isEmpty() {
        return this.front === this.rear
    }

    isFull() {
        return (this.rear + 1) % this.array.length === this.front
    }
}

const circleQueue = new CircleQueue(5)
circleQueue.enQueue(1)
circleQueue.enQueue(2)
circleQueue.enQueue(3)
circleQueue.enQueue(4)
let deQueueVal = circleQueue.deQueue()
console.log('deQueueVal ', deQueueVal)
circleQueue.enQueue(5)
circleQueue.enQueue(6)

console.log('circleQueue ', circleQueue)
