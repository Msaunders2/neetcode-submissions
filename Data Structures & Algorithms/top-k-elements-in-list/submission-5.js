class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let heap = new MinPriorityQueue((x) => x[1]);
        let map = new Map();
        let res = [];

        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])){
                map.set(nums[i],map.get(nums[i])+1);
            }else{
                map.set(nums[i],1);
            }
        }

        for(let [num,freq] of map.entries()){
            heap.enqueue([num,freq]);

            if(heap.size() > k){
                heap.dequeue();
            }
            
        }

        for(let i = 0; i < k; i++){
            let [num,freq] = heap.dequeue();
            res.push(num);
        }

        return res;
    }
}
