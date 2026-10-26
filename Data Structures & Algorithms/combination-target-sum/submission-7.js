class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let curr = [];

        if(nums.length === 0){
            return res;
        }

        backtrack(0,0);

        function backtrack(ind, total){
            //base case
            if(total === target){
                res.push([...curr]);
                return;
            }

            for(let i = ind; i < nums.length;i++){
                //violates condition
                if(total > target){
                    continue;
                }

                //make choice
                curr.push(nums[i])

                //backtrack
                backtrack(i, total + nums[i]);

                //undo choice
                curr.pop();
                // total -= nums[i];
            }
        }
        return res;
    }
}
