export abstract class LinearDataStructure {
    protected elements: any[] = []
    protected size = 0
    protected maxSize: number

    constructor(maxSize = Infinity) {
        this.maxSize = maxSize
    }

    peek() {
        if (this.isEmpty()) return false
        return this.elements[0]
    }

    isEmpty() {
        return this.elements.length === 0
    }

    print() {
        if(this.isEmpty()) return false
        let queue = ''
        this.elements.forEach(el => queue += el + ' ')
        console.log(queue)
    }
}