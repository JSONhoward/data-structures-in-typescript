export abstract class LinkedList {
    protected head: ListNode = null
    protected size: number = 0

    length() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    indexOf(data: ListNode['element']) {
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
}

export class ListNode {
    element: any
    prev?: ListNode = null
    next: ListNode = null

    constructor(element: any) {
        this.element = element
    }
}