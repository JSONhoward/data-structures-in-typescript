export abstract class LinkedList<T> {
    protected head: ListNode<T> = null
    protected size: number = 0

    length() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    indexOf(data: ListNode<T>['element']) {
        if(this.size === 0) return -1
        let count = 0
        let current = this.head

        while(current) {
            if(current.element === data) {
                return count
            }
            count++
            current = current.next
        }
        return -1
    }

    print() {
        if(this.size === 0) return false
        let nodes = ''
        let current = this.head

        while(current) {
            nodes += current.element + "->"
            current = current.next
        }
        console.log(nodes)
    }

    getHead() {
        return this.head
    }
}

export class ListNode<T> {
    element: T
    prev?: ListNode<T> = null
    next: ListNode<T> = null

    constructor(element: T) {
        this.element = element
    }
}