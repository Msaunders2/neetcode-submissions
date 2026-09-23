class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let curr = [];

        if(nums.length === 0 || target === 0){
            return res;
        }
        let currSum = 0;
        backtrack(0);

        //think this is mostly right but the currSum is not the right parameter 
        
        function backtrack(start){
            if(currSum === target){
                res.push([...curr].sort((a,b) => a-b));
                return;
            }

            for(let i = start; i < nums.length; i++){
                if(currSum > target){
                    return;
                }

                curr.push(nums[i])
                currSum += nums[i]
                backtrack(i);
                curr.pop();
                currSum -= nums[i];

            }

        }

        return res;
    }
}
