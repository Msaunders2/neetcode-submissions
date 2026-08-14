class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        let res = [];
        let heap = new MinPriorityQueue((x)=> x[1]);

        for(let num of nums){
            freqMap.set(num, (freqMap.get(num) || 0)+ 1);
        }

        for(let [num, freq] of freqMap.entries()){
            heap.enqueue([num,freq]);
            if(heap.size() > k){
                heap.dequeue();
            }
        }

        for(let i = 0; i < k;i++){
            const[num,freq] = heap.dequeue();
            res.push(num);

        }

        return res;
    }
}
