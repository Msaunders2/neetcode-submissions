class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for(let char of s){
            if(char === "{" || char === "[" || char === "("){
                stack.push(char);
            }else{
                let ele = stack.pop();

                if(char === ")"){
                    if(ele !== "("){
                        return false;
                    }
                }

                if(char === "]"){
                    if(ele !== "["){
                        return false;
                    }
                }

                if(char === "}"){
                    if(ele !== "{"){
                        return false;
                    }
                }
            }
        }

        if(stack.length === 0){
            return true;
        }else{
            return false
        }
    }

}
