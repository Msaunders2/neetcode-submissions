class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let rightCount = n;
        let leftCount = n;
        let comboRes = [];
        let res = [];

        function helper(leftCount,rightCount,comboRes){
            if(rightCount === 0 && leftCount === 0){
                res.push(comboRes.join(""));
                return;
            }

            if(leftCount > 0 ){
                comboRes.push("(");
                helper(leftCount - 1, rightCount, comboRes); 
                comboRes.pop();
            }

            if(rightCount > leftCount){
                comboRes.push(")");
                helper(leftCount, rightCount - 1, comboRes); 
                comboRes.pop();

            }
        }

        helper(leftCount,rightCount,comboRes);
        return res;

    }
}
