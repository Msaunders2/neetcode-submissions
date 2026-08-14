class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let set = new Set();

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(board[i][j] !== "."){
                    if(set.has(board[i][j])){
                        return false;
                    }
                    set.add(board[i][j]);

                }
            }
            set.clear();

        }

        for(let j = 0; j < 9; j++){
            for(let i = 0; i < 9; i++){
                if(board[i][j] !== "."){
                    if(set.has(board[i][j])){
                        return false;
                    }
                    set.add(board[i][j]);
                }
            }
            set.clear();
        }

       
        for(let startRow = 0; startRow < 9; startRow+=3){
            for(let startCol = 0; startCol < 9; startCol+=3){
                for(let i = startRow; i < startRow + 3; i++){
                    for(let j = startCol; j < startCol + 3; j++){
                        if(board[i][j] !== "."){
                            if(set.has(board[i][j])){
                                return false;
                            }
                            set.add(board[i][j]);

                        }
                    }
                }
                set.clear();

            }
        }

        return true;
    }
}
