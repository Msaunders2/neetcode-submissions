class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        let currPath = [];
        let openCt = n;
        let closeCt = n;

        if(n === 0){
            return res;
        }

        backtrack(openCt, closeCt);

        function backtrack(openCt, closeCt){
            //if we used all base case
            if(openCt === 0 && closeCt === 0){
                res.push([...currPath].join(''));
                return;
            }

            if(openCt > 0){
                currPath.push("(");
                backtrack(openCt - 1, closeCt);
                currPath.pop();

            }

            if(closeCt > openCt){
                currPath.push(")");
                backtrack(openCt, closeCt - 1);
                currPath.pop();

            }

            
        }

        return res;
    }
}
