export abstract class Heap<T> {
    protected items: T[] = []

    protected findParent(index: number) {
        return Math.ceil((index / 2) - 1)
    }

    protected left(index: number) {
        return (2 * index) + 1
    }

    protected right(index: number) {
        return (2 * index) + 2
    }

    insert(item: T): void { }

    remove(item: T) {}

    length() {
        return this.items.length
    }

    top() {
        return this.items[0]
    }

    log() {
        console.clear()
        console.log(this.items)
    }
}