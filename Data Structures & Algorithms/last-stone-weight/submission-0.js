class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let res = 0;

        let heap = new MaxPriorityQueue();

        for(let stone of stones){
            heap.enqueue(stone);
        }

        while(heap.size() >= 2){
            let x = heap.dequeue();
            let y = heap.dequeue();

            if(x > y){
                x = x - y;
                heap.enqueue(x);
            }else if(y > x){
                y = y - x;
                heap.enqueue(y);
            }

        }

        if(heap.size() === 1){
            res = heap.dequeue();
        }

        return res;

    }
}
