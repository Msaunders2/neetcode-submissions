class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let res = true;
        let sNormalized = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
        let end = sNormalized.length - 1;

        for(let start = 0; start < end; start++){
            if(sNormalized[start] !== sNormalized[end]){
                return false;
            }

            end--;
        }

        return res
    }
}
