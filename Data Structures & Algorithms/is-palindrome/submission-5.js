class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sNormalized = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

        //two pointer approach 
        //stack approach

        let stack = [];
        let res = true;
        
        for(let char of sNormalized){
            stack.push(char);
        }

        for(let i = 0; i < sNormalized.length; i++){
            let char = stack.pop();
            if(sNormalized[i] !== char){
                res = false;
            }

        }

        if(stack.length > 1){
            res = false;
        }
       return res;
    }
}
