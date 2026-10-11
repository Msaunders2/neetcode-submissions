class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = new MinPriorityQueue(tuple => tuple[0]);

        for(let point of points){
            //calc dist
            let euclideanDis = Math.sqrt((point[0] ** 2)+ (point[1] ** 2));
            let tuple = [euclideanDis, point];
            heap.enqueue(tuple);
        }


        let res = [];

        for(let i = 0; i < k;i++){
            let ele = heap.dequeue();
            res.push(ele[1]);
        }

        return res;
    }
}
