import { BinaryNode } from "./helpers/binarySearch";

export class BinarySearchTree {
    private root: BinaryNode = null

    private insertNode(node: BinaryNode, newNode: BinaryNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (!node.right) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    private removeNode(node: BinaryNode, data: any) {
        if (!this.root) {
            return null
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data)
            return node
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data)
        } else {
            if (!node.left && !node.right) {
                node = null
                return node
            }

            if (!node.left) {
                node = node.right
                return node
            }

            if (!node.right) {
                node = node.left
                return node
            }

            let aux = this.findMinNode(node.right)
            node.data = aux.data

            node.right = this.removeNode(node.right, aux.data)
            return node
        }
    }

    insert(data: any) {
        const node = new BinaryNode(data)

        if (!this.root) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    remove(data: any) {
        this.root = this.removeNode(this.root, data)
    }

    inOrder(node: BinaryNode) {
        if (node) {
            this.inOrder(node.left)
            console.log(node.data)
            this.inOrder(node.right)
        }
    }

    preOrder(node: BinaryNode) {
        if (node) {
            console.log(node.data)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    postOrder(node: BinaryNode) {
        if (node) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.data)
        }
    }

    findMinNode(node: BinaryNode) {
        if (!node.left) {
            return node
        }
        return this.findMinNode(node.left)
    }

    getRootNode() {
        return this.root
    }

    search(node: BinaryNode, data: any) {
        if (!node) {
            return null
        } else if (data < node.data) {
            return this.search(node.left, data)
        } else if (data > node.data) {
            return this.search(node.right, data)
        } else {
            return node
        }
    }
}