class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sum = new Set();
        
        for(let num of nums){
            sum.add(num);
        }

        for(let i = 0; i< nums.length; i++){
            let newTarget =  target - nums[i];
            if(sum.has(newTarget) && nums.indexOf(newTarget) !== i){
                return [i, nums.indexOf(newTarget)];
            }
        }
    }
}
