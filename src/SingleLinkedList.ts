import { LinkedList, ListNode } from './helpers/linkedList'

export class SingleLinkedList extends LinkedList {
    add(data: ListNode['element']) {
        const node = new ListNode(data)
        let current: ListNode
        if (!this.head) {
            this.head = node
        } else {
            current = this.head

            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    addFromList(arr: ListNode['element'][]) {
        arr.forEach(el => this.add(el))
    }

    insertAt(data: ListNode['element'], index: number) {
        if (index < 0 || index > this.size) return false
        const node = new ListNode(data)
        let current = this.head
        let previous: ListNode

        if (index === 0) {
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
            node.next = current
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
        if(index < 0 || index > this.size || this.size === 0) return -1
        let current = this.head

        if(index === 0) {
            this.head = current.next
            this.size--
            return current.element
        }

        let previous: ListNode
        let count = 0

        while(count < index) {
            previous = current
            current = current.next
            count++
        }
        previous.next = current.next
        this.size--
        return current.element
    }

    findAndDelete(data: ListNode['element']) {
        if(!this.head) return -1

        let current = this.head
        let previous: ListNode

        while(current) {
            if(current.element === data) {
                if(previous === null) {
                    this.head = current.next
                }else {
                    previous.next = current.next
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