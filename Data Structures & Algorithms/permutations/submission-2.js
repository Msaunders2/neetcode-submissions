class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        let curr = [];

        if(nums.length === 0){
            return res;
        }

        backtrack(0);

        function backtrack(start){
            if(curr.length === nums.length){
                res.push([...curr]);
                return;
            }

            for(let i = 0; i < nums.length; i++){
                //violation
                if(curr.includes(nums[i])){
                    continue;
                }

                //make choice
                curr.push(nums[i]);

                //backtrack
                backtrack(i);

                //undo choice
                curr.pop();
            }

        }

        return res;
    }
}
