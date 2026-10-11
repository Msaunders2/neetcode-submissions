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


        function backtrack(start){
            //base case
            if(currSum === target){
                res.push([...curr]);
                return;
            }

            if (currSum > target) {
                return;
            }

            //for choice in choices
            for(let i = start; i < nums.length; i++){
                //violates case
                if (currSum + nums[i] > target) {
                    continue;
                }

                //make choice
                curr.push(nums[i]);
                currSum += nums[i];
                //backtrack
                backtrack(i);
                //undo choice
                curr.pop();
                currSum -= nums[i];
            }
        }

        return res;
    }
}
