import { LinkedList, ListNode } from './helpers/linkedList';

export class DoubleLinkedList<T> extends LinkedList<T> {
    add(data: ListNode<T>['element']) {
        const node = new ListNode(data)
        let current = this.head

        if (!current) {
            this.head = node
        } else {
            while (current.next) {
                current = current.next
            }
            current.next = node
            node.prev = current
        }
        this.size++
    }

    addFromList(arr: ListNode<T>['element'][]) {
        arr.forEach(el => this.add(el))
    }

    insertAt(data: ListNode<T>['element'], index: number) {
        if (index < 0 || index > this.size) return false
        const node = new ListNode(data)
        let current = this.head
        let previous: ListNode<T>

        if (index === 0) {
            this.head.prev = node
            node.next = this.head
            this.head = node
        } else {
            let count = 0

            while (count < index) {
                previous = current
                current = current.next
                count++
            }
            previous.next = node
            node.prev = previous
            node.next = current
            current.prev = node
        }
        this.size++
    }

    delete() {
        if (!this.head) return false
        let current = this.head

        if (this.size === 1) {
            this.head = null
            this.size = 0
            return current.element
        }

        while (current.next.next) {
            current = current.next
        }
        let node = current.next
        current.next = null
        this.size--
        return node.element
    }

    deleteAt(index: number) {
        if (index < 0 || index > this.size || this.size === 0) return -1
        let current = this.head

        if (index === 0) {
            this.head = current.next
            this.head.prev = null
            this.size--
            return current.element
        }

        let previous: ListNode<T>
        let count = 0

        while (count < index) {
            previous = current
            current = current.next
            count++
        }
        previous.next = current.next
        current.next.prev = previous
        this.size--
        return current.element
    }

    findAndDelete(data: ListNode<T>['element']) {
        if (!this.head) return -1

        let current = this.head
        let previous: ListNode<T>

        while (current) {
            if (current.element === data) {
                if (!previous) {
                    this.head = current.next
                    this.head.prev = null
                } else {
                    previous.next = current.next
                    current.next.prev = previous
                }
                this.size--
                return current.element
            }
            previous = current
            current = current.next
        }
        return -1
    }
}