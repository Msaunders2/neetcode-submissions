class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;
        let wordFound = false;

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(word[0] === board[i][j]){
                    if(dfs(i, j, 0)){
                        wordFound = true;
                    }
                }
            }
        }

        function dfs(i, j, currInd){
            //good case
            if(currInd === word.length){
                return true;
            }

            //bad case
            if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[currInd]){
                return false;
            }

            const temp = board[i][j];
            board[i][j] = "#";

            const res = dfs(i+1, j, currInd+1) || 
            dfs(i-1, j, currInd+1) || 
            dfs(i, j+1, currInd+1) || 
            dfs(i, j-1, currInd+1);

            board[i][j] = temp;

            return res;
        }

        return wordFound;
    }
}
