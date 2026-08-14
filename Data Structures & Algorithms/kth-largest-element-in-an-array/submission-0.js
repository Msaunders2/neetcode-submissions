class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        nums.sort((a,b) => b - a);

        for(let i = 0; i < k; i++){
            if(i === (k-1)){
                return nums[i];
            }
        }
    }
}
