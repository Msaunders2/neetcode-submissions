class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        let stack = [];

        for(let i = 0; i < s.length; i++){
            console.log(s[i]);
            if(i < Math.floor(s.length / 2)){
                stack.push(s[i]);

            }else{
                if(s.length%2 === 1 && i === Math.floor(s.length / 2)){
                    i++;
                }
                let char  = stack.pop();
                if(char !== s[i]){
                    return false;
                }
            }
        }

        return true;
    }
}
