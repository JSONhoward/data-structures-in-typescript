export class BinaryNode<T> {
    data: T = null
    left: BinaryNode<T> = null
    right: BinaryNode<T> = null

    constructor(data: T) {
        this.data = data
    }
}