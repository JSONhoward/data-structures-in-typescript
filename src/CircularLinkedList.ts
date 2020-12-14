import { LinkedList, ListNode } from './helpers/linkedList'

export class CircularLinkedList<T> extends LinkedList<T> {
    add(data: ListNode<T>['element']) {
        const node = new ListNode(data)
        let current = this.head
        if(!current) {
            this.head = node
            this.head.next = this.head
        }else {
            while(current.next !== this.head) {
                current = current.next
            }
            current.next = node
            node.next = this.head
        }
        this.size++
    }

    addFromList(arr: ListNode<T>['element'][]) {
        arr.forEach(el => this.add(el))
    }

    insertAt(data: ListNode<T>['element'], index: number)  {
        if(index < 0 || index > this.size) return false
        const node = new ListNode(data)
        let current = this.head
        let previous: ListNode<T>
        let count = 0

        if(index === 0) {
            while(current.next !== this.head) {
                current = current.next
            }
            current.next = node
            node.next = this.head
            this.head = node
        }else {
            while(count < index) {
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
        if(!this.head) return false
        let current = this.head
        let previous: ListNode<T>

        if(this.size === 1) {
            this.head = null
            this.size = 0
            return current.element
        }

        while(current.next !== this.head) {
            previous = current
            current = current.next
        }
        previous.next = this.head
        this.size--
        return current.element
    }

    deleteAt(index: number) {
        if(index < 0 || index > this.size) return -1
        let current = this.head

        if(index === 0) {
            while(current.next !== this.head) {
                current = current.next
            }
            let node = this.head
            current.next = node.next
            this.head = node.next
            this.size--
            return node.element
        }

        let previous: ListNode<T>
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

    findAndDelete(data: ListNode<T>['element']) {
        if(!this.head) return -1

        let current = this.head
        let previous: ListNode<T>

        while(current) {
            if(current.element === data) {
                if(!previous) {
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

    print() {
        if(this.size === 0) return false
        let nodes = '<-'
        let current = this.head

        while(current.next !== this.head) {
            nodes += current.element + "<->"
            current = current.next
        }
        nodes += current.element + '->'
        console.log(nodes)
    }
}