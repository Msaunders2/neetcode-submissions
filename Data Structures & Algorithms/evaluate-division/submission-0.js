class Solution {
    /**
     * @param {string[][]} equations
     * @param {number[]} values
     * @param {string[][]} queries
     * @return {number[]}
     */
    calcEquation(equations, values, queries) {
        let graph = new Map();

        for(let i = 0; i < equations.length;i++){
            const [nodeOrgin, nodeDest] = equations[i];
            const edgeVal = values[i];
            const edgeValInv = 1/values[i];


            if(!graph.has(nodeOrgin)){
                graph.set(nodeOrgin,[]);
            }

            if(!graph.has(nodeDest)){
                graph.set(nodeDest,[]);
            }

            graph.get(nodeOrgin).push([nodeDest, edgeVal]);
            graph.get(nodeDest).push([nodeOrgin, edgeValInv]);
        }

        let res = [];
        let product = 1;
    

        for (const [currNode, targetNode] of queries){
            let visited = new Set();

            res.push(dfs(graph, currNode, targetNode, visited, product));
            
        }

        function dfs(graph, currNode, targetNode, visited, product) {
            if (!graph.has(currNode) || !graph.has(targetNode)) return -1;

            if(currNode === targetNode){
                return product;
            }

            visited.add(currNode);

            for (const [neighbor, edgeVal] of graph.get(currNode)){
                if(!visited.has(neighbor)){
                    const res = dfs(graph, neighbor, targetNode, visited, product * edgeVal);
                    if (res !== -1){
                        return res;
                    }
                }
            }

            visited.delete(currNode);
            return -1;
        }

        return res;
    }

}
