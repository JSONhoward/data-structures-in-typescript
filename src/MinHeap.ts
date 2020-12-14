import { Heap } from "./helpers/heap";

export class MinHeap<T> extends Heap<T> {
    insert(item: T) {
        this.items.push(item);

        if (this.items.length !== 1) {
            let current = this.items.length - 1

            while (current > 0 && this.items[this.findParent(current)] > this.items[current]) {
                let parentIndex = this.findParent(current);

                [this.items[parentIndex], this.items[current]] = [this.items[current], this.items[parentIndex]];
                current = parentIndex
            }
        }
    }

    remove() {
        const min = this.top()
        this.items[0] = this.items.pop()

        let index = 0

        while (this.items[index] >= this.items[this.left(index)] || this.items[index] >= this.items[this.right(index)]) {
            let leftIndex = this.left(index)
            let rightIndex = this.right(index)

            if (this.items[index] >= this.items[leftIndex] && this.items[index] >= this.items[rightIndex]) {
                if (this.items[leftIndex] < this.items[rightIndex]) {
                    [this.items[index], this.items[leftIndex]] = [this.items[leftIndex], this.items[index]]
                    index = leftIndex
                } else {
                    [this.items[index], this.items[rightIndex]] = [this.items[rightIndex], this.items[index]]
                    index = rightIndex
                }
            } else if (this.items[index] >= this.items[leftIndex]) {
                [this.items[index], this.items[leftIndex]] = [this.items[leftIndex], this.items[index]]
                index = leftIndex
            } else if (this.items[index] >= this.items[rightIndex]) {
                [this.items[index], this.items[rightIndex]] = [this.items[rightIndex], this.items[index]]
                index = rightIndex
            }
        }
        return min
    }
}