import { MaxHeap } from "./MaxHeap";

const myHeap = new MaxHeap();

[2, 5, 7, 8, 10, 9].forEach(num => {
    myHeap.insert(num)
})

myHeap.log()

myHeap.remove()

myHeap.log()