import { BinaryNode } from "./helpers/binarySearch";

export class BinarySearchTree<T> {
    private root: BinaryNode<T> = null
    private count: number = 0

    private findMinNode(node = this.root) {
        if (!node.left) {
            return node
        }
        return this.findMinNode(node.left)
    }

    private findMaxNode(node = this.root) {
        if (!node.right) {
            return node
        }
        return this.findMaxNode(node.right)
    }

    private insertNode(node: BinaryNode<T>, current: BinaryNode<T>) {
        if (current.data < node.data) {
            if (!node.left) {
                node.left = current
            } else {
                this.insertNode(node.left, current)
            }
        } else if (current.data > node.data) {
            if (!node.right) {
                node.right = current
            } else {
                this.insertNode(node.right, current)
            }
        } else {
            return 'already exists'
        }
    }

    private removeNode(node: BinaryNode<T>, data: T) {
        if (!node) {
            return null
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data)
            return node
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data)
            return node
        } else {
            if (!node.left && !node.right) {
                node = null
                this.count--
                return node
            }

            if (!node.left) {
                const temp = node.right
                node = null
                this.count--
                return temp
            }

            if (!node.right) {
                const temp = node.left
                node = null
                this.count--
                return temp
            }

            let temp = this.findMinNode(node.right)
            node.data = temp.data

            node.right = this.removeNode(node.right, temp.data)
            this.count--
            return node
        }
    }

    insert(data: T) {
        const node = new BinaryNode<T>(data)

        if (!this.root) {
            this.root = node
            this.count++
        } else {
            this.insertNode(this.root, node)
            this.count++
        }
    }

    remove(data: T) {
        this.root = this.removeNode(this.root, data)
    }

    search(data: T, node = this.root) {
        if (!node) {
            return null
        } else if (data < node.data) {
            return this.search(data, node.left)
        } else if (data > node.data) {
            return this.search(data, node.right)
        } else {
            return node
        }
    }

    DFSInOrder(node = this.root) {
        let result = []
        const traverse = (node: BinaryNode<T>) => {
            if (node.left) traverse(node.left)
            result.push(node.data)
            if (node.right) traverse(node.right)
        }
        traverse(node)
        return result
    }

    DFSPreOrder(node = this.root) {
        let result = []
        const traverse = (node: BinaryNode<T>) => {
            result.push(node.data)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(node)
        return result
    }

    DFSPostOrder(node = this.root) {
        let result = []
        const traverse = (node: BinaryNode<T>) => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            result.push(node.data)
        }
        traverse(node)
        return result
    }

    BFS() {
        let result = [],
            queue = [this.root]

        while (queue.length) {
            let current = queue.shift()
            result.push(current.data)

            if (current.left) {
                queue.push(current.left)
            }

            if (current.right) {
                queue.push(current.right)
            }
        }

        return result
    }

    getRootNode() {
        return this.root
    }

    getCount() {
        return this.count
    }

    min() {
        return this.findMinNode()
    }

    max() {
        return this.findMaxNode()
    }
}