export class Node {
    element: any = null
    leftChild?: Node
    rightChild?: Node
    constructor(element, leftChild, rightChild) {
        this.element = element
        this.leftChild = leftChild
        this.rightChild = rightChild
    }
}
