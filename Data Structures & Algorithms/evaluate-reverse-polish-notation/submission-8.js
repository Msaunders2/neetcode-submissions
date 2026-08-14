class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let numStack = [];

        for(let i = 0; i < tokens.length; i++){
            if(!isNaN(tokens[i])){
                numStack.push(Number(tokens[i]));
            }else{
                let num2 = numStack.pop();
                let num1 = numStack.pop();

                if(tokens[i] === "+" ){
                numStack.push(num1 + num2);
                }else if(tokens[i] === "-" ){
                    numStack.push(num1 - num2);
                }else if(tokens[i] === "*" ){
                    numStack.push(num1 * num2);
                }else if(tokens[i] === "/"){
                    numStack.push(Math.trunc(num1 / num2));

                }  

            } 

        }
        return numStack[0];
    }
}
