export class HashMap<T> {
    private size = 0
    private buckets: Map<string | number, T>[]

    constructor(size = 100) {
        this.size = size
        this.buckets = new Array(this.size)

        for(let i = 0; i < size; i++) {
            this.buckets[i] = new Map<string | number, T>()
        }
    }

    private hash(key: number | string, size: number) {
        let hashed = 0
        const keyString = key.toString()
        for(let i = 0; i < keyString.length; i++) {
            hashed += keyString.charCodeAt(i)
        }
        return hashed % size
    }

    insert(key: number | string, value: T) {
        let idx = this.hash(key, this.size)
        this.buckets[idx].set(key, value)
    }

    remove(key: number | string) {
        let idx = this.hash(key, this.size)
        let deleted = this.buckets[idx].get(key)
        this.buckets[idx].delete(key)

        return deleted
    }

    search(key: number | string) {
        let idx = this.hash(key, this.size)

        return this.buckets[idx].get(key)
    }

    log() {
        this.buckets.forEach(bucket => {
            console.log(bucket)
        })
    }
}