class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for(let i = 0; i < s.length; i++){
            if(s[i] === "(" ||s[i] === "["||s[i] === "{"){
                stack.push(s[i]);
            }else{
                let char;
                if(stack.length > 0){
                    char = stack.pop();
                }else{
                    return false;
                }
                
                if(s[i] === ")" && char !== "("){
                    return false;
                }else if(s[i] === "}" && char !== "{"){
                    return false;
                }else if(s[i] === "]" && char !== "["){
                    return false;
                }
            }
        }

        if(stack.length !== 0){
            return false;
        }

        return true;
    }
}
