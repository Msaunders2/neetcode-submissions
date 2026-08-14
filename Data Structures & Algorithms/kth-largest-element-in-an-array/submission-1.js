class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let maxHeap = new MaxPriorityQueue((x) => x);

        for(let num of nums){
            maxHeap.enqueue(num);
        }

        console.log(maxHeap);

        for(let i = 1; i <= k; i++){
            if(i === k){
                return maxHeap.dequeue();
            }else{
                maxHeap.dequeue();
            }
        }
    }
}
