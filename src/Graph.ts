import { Queue } from './Queue';
export class Graph {
    private list = new Map()
    private vertices: number

    constructor(vertices: number) {
        this.vertices = vertices
    }

    addVertex(v: any) {
        this.list.set(v, [])
    }

    addEdge(v: any, w: any) {
        this.list.get(v).push(w)
        this.list.get(w).push(v)
    }
    //* breadth first search
    bfs(node: any) {
        let visited = {}
        let q = new Queue()

        visited[node] = true
        q.enqueue(node)

        while (!q.isEmpty()) {
            let getQueueElement = q.dequeue()

            console.log(getQueueElement)

            let getList = this.list.get(getQueueElement)

            for (let i in getList) {
                let node = getList[i]

                if (!visited[node]) {
                    visited[node] = true
                    q.enqueue(node)
                }
            }
        }
    }
    //* depth first search
    dfs(node: any) {
        let visited = {}

        this.util(node, visited)
    }

    private util(v: any, visited: object) {
        visited[v] = true
        console.log(v)

        let neighbors = this.list.get(v)

        for (let i in neighbors) {
            let elem = neighbors[i]
            if (!visited[elem]) {
                this.util(elem, visited)
            }
        }
    }

    print() {
        let keys = this.list.forEach((el, key) => {
            // let graph = ''
            // for(let i of el) {
            //     graph += i + " "
            //     console.log(key + " -> " + graph)
            // }
            console.log(key + " -> " + el)
        })
    }
}