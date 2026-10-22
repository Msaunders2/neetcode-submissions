class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let zeroCt = 0;
        let res = [];

        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 0){
                zeroCt++;
            }else{
                product = nums[i] * product;
            }
        }

        for(let i = 0; i < nums.length; i++){
            if(zeroCt > 1){
                res.push(0);
            }else if(zeroCt > 0 && (nums[i] !== 0)){
                res.push(0);
            }else if(zeroCt > 0 && (nums[i] === 0)){
                res.push(product);
            }else{
                res.push(product/nums[i]);
            }
        }

        return res;
    }
}
