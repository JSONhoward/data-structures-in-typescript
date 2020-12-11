import { BinarySearchTree } from "./BinarySearchTree"


const BST = new BinarySearchTree<number>();

[15, 36, 3, 12, 2, 28, 39].forEach(num => {
    BST.insert(num)
    console.log(BST.getCount())
})


console.log(BST.DFSPreOrder())
console.log(BST.getCount())
BST.remove(12)
console.log(BST.DFSPreOrder())
console.log(BST.getCount())