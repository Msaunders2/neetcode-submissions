class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dupMap = new Set();

        for(let num of nums){
            if(dupMap.has(num)){
                return true;
            }

            dupMap.add(num);
        }
        return false;

    }
}
