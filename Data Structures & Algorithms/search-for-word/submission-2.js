class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let res = false;
        let curr = [];
        let visited = board.map(row => row.map(() => false));

        if(word.length === 0){
            return res;
        }

        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board[0].length; c++){
                backtrack(r,c,0);
            }
        }

        function backtrack(row, col, wordInd){
            //skip rows with no match or already visitied 
            if(board[row][col] !== word[wordInd]|| visited[row][col]) {
                return; 
            }

            //collect matched rows and marked them as visitied
            curr.push(board[row][col]);
            visited[row][col] = true;

            //find res
            if(curr.length === word.length){
                res = true;
                return;
            }

            //move up row
            if(row + 1 < board.length){
                backtrack(row + 1,col, wordInd + 1);
            }

            //move down row
            if(row - 1 >= 0){
                backtrack(row - 1,col, wordInd + 1);
            }

            //move up on col
            if(col + 1 < board[0].length){
                backtrack(row,col + 1, wordInd + 1);
            }
            
            //move down col
            if(col - 1 >= 0){
                backtrack(row,col - 1, wordInd + 1);
            }

            curr.pop();
            visited[row][col] = false;
        }

        return res;
    }
}
