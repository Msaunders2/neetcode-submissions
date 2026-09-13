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

        for(let i = 0; i < Math.floor(sNormalized.length/2); i++){
            let char = stack.pop();
            if(sNormalized[i] !== char){
                res = false;
            }
        }

       return res;
    }
}
