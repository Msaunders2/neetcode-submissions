class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let res = [];
        let curr = [];

        backtrack(0);

        return res;

        function backtrack(row){
            //success case 
            if(curr.length === n){
                res.push(buildBoard(curr));
                return;
            }
    

            for(let col = 0; col < n; col++){
                if(!isSafe(row,col,curr)){
                    continue;
                }

                curr.push([row,col]);
                backtrack(row + 1);
                curr.pop();

            }

        }

        function isSafe(row, col, curr) {
            for (let [r, c] of curr) {
                if (c === col) return false;                    // same column
                if (Math.abs(r - row) === Math.abs(c - col)) return false;   // same diagonal
            }
            return true;
        }

        function buildBoard(curr) {
            let board = [];
            for (let [r, c] of curr) {
                let rowStr = '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1);
                board.push(rowStr);
            }
            return board;
        }
    }
}
