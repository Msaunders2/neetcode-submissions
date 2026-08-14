class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let r = numbers.length;
        let res = [];

        for(let l = 0; l < numbers.length - 1; l++){
            for(let r = numbers.length; r > l; r--){
                if((numbers[r] + numbers[l]) === target){
                    res.push(l+1, r+1);
                }

            }
        }
        return res;
    }
}
