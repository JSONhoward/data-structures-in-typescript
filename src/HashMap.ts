export class HashMap<T> {
    private size = 0
    private elements = {}

    constructor(obj: object) {
        for (let props in obj) {
            if (obj.hasOwnProperty(props)) {
                this.elements[props] = obj[props]
                this.size++
            }
        }
    }

    setItem(key: string | number, value: T) {
        if (this.hasItem(key)) {
            this.elements[key] = value
        } else {
            this.elements[key] = value
            this.size++
        }
    }

    getItem(key: string | number) {
        return this.hasItem(key) ? this.elements[key] : undefined
    }

    hasItem(key: string | number) {
        return this.elements.hasOwnProperty(key)
    }

    removeItem(key: string | number) {
        if (this.hasItem(key)) {
            let previous = this.elements[key]
            this.size--
            delete this.elements[key]
            return previous
        } else {
            return undefined
        }
    }

    keys() {
        let keys = []
        for (let key in this.elements) {
            if (this.hasItem(key)) {
                keys.push(key)
            }
        }
        return keys
    }

    values() {
        let values = []
        for (let key in this.elements) {
            if (this.hasItem(key)) {
                values.push(this.elements[key])
            }
        }
    }

    clear() {
        this.elements = {}
        this.size = 0
    }
}