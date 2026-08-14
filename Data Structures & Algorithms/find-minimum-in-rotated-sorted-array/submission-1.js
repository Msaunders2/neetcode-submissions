class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        if(nums.length === 1){
            return nums[0];
        }

        for(let i = 1 ; i < nums.length; i++){
        //is min is in the middle or at the end
            if(nums[i] < nums[i-1]){
                return nums[i];
            //otherwise if we get to the end without the coniditon being true, min at the beginning 
            }else if(i === nums.length-1){
                return nums[0];
            } 
        }
        
    }
}
