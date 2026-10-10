class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];
        let curr = [];


        if(nums.length === 0){
            return res;
        }

        backtrack(0);

        function backtrack(start){
            res.push([...curr]);

            for(let i = start; i < nums.length; i++){
                curr.push(nums[i]);
                backtrack(i + 1);
                curr.pop();
            }

        }
        return res;
        
    }
}
