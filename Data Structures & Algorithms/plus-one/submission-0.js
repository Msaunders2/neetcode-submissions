class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {

        for(let i = digits.length - 1; i >= 0; i--){
            if(digits[i] === 9){
                digits[i] = 0; 

                if(i === 0){
                    return [1, ...digits];
                }
               
            }else{
                console.log(digits[i])
                digits[i] = digits[i] + 1;
                return digits;
            }
        }
    }
}
