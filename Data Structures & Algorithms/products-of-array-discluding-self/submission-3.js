class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCt = 0;
        let res = [];
        let numCp = [...nums];

        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 0){
                zeroCt++;
                numCp.splice(i, 1);
            }
        }

        let prod = numCp.reduce((accumulator, current) => accumulator * current, 1);
    
        if(zeroCt === 0){
            for(let i = 0; i < nums.length; i++){
                let temp = nums[i];
                res.push(prod/temp);
            }
        }else if(zeroCt === 1){
            res = new Array(nums.length).fill(0)

            for(let i = 0; i < nums.length; i++){
                if(nums[i] === 0){
                    res[i] = prod;
                }
            }
        }else{
            return new Array(nums.length).fill(0)
        }
        return res;
    }
}
