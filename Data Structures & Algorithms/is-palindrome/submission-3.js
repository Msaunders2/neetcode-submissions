class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
          s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        let j = s.length-1;
        let i = 0;

        while(i < j){

            if(s[i] !== s[j]){
                return false;
            }

            i++;
            j--;
        }

        return true;
       
    
    }
}
