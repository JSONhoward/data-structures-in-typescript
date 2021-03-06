import { LinearDataStructure } from './helpers/linearDataStructure'

export class Stack<T> extends LinearDataStructure<T> {
    push(element: T) {
        if (this.size < this.maxSize) {
            this.elements.push(element)
            this.size++
        }
        return false
    }

    pop(amount = 1) {
        if (this.isEmpty()) return false
        if (amount === 1) {
            this.size--
            return this.elements.pop()
        } else if (amount <= this.size) {
            let temp = []
            for (let i = 0; i < amount; i++) {
                this.size--
                temp.push(this.elements.pop())
            }
            return temp
        }
        return false
    }
}