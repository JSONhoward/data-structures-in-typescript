import { LinearDataStructure } from './helpers/linearDataStructure'

export class Queue<T> extends LinearDataStructure<T> {
    enqueue(element: T) {
        if (this.size < this.maxSize) {
            this.elements.push(element)
            this.size++
        }
        return false
    }

    dequeue(amount = 1) {
        if (this.isEmpty()) return false
        if (amount === 1) {
            this.size--
            return this.elements.shift()
        } else if (amount <= this.size) {
            let temp = []
            for (let i = 0; i < amount; i++) {
                this.size--
                temp.push(this.elements.shift())
            }
            return temp
        }
        return false
    }
}