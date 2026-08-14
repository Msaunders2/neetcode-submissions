class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dupeSet = new Set();

        for(let num of nums){
            if(dupeSet.has(num)){
                return true;
            }else{
                dupeSet.add(num);
            }
        }
        return false;
    }
}
