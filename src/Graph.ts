import { SingleLinkedList } from "./SingleLinkedList"

export class Graph {
    private list: SingleLinkedList<number>[] = []
    private vertices: number

    constructor(vertices: number) {
        this.vertices = vertices

        for(let i = 0; i < vertices; i++) {
            this.list.push(new SingleLinkedList<number>())
        }
    }

    addEdge(source: number, destination: number) {
        if(source < this.vertices && destination < this.vertices) {
            this.list[source].insertAt(destination, 0)
        }
    }

    print() {
        for(let i = 0; i < this.list.length; i++) {
            process.stdout.write("|" + String(i) + "| => ");
            let temp = this.list[i].getHead();
            while (temp != null) {
              process.stdout.write("[" + String(temp.element) + "] -> ");
              temp = temp.next;
            }
            console.log("null ");
        }
    }
}