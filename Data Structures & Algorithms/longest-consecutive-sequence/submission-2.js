class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set();
        let res = 0;

        for(let num of nums){
            set.add(num);
        }

        for(let i = 0; i < nums.length; i++){
            if(!set.has((nums[i]) - 1)){
                //start of sequence
                let start = nums[i];
                let currLen = 1;

                while(set.has(++start)){
                    currLen++;
                }
                res = Math.max(currLen, res);
            }    
        }
        return res;
    }
}
