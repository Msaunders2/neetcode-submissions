class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = board.length;
        let cols = board[0].length;
        let uniqueSet = new Set();

        //check rows
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(uniqueSet.has(board[i][j])){
                    // console.log("failed with:", board[i][j]);
                    return false;
                }else if(board[i][j] !== "."){
                    uniqueSet.add(board[i][j]);
                    // console.log("adding:", board[i][j]);
                }else{
                    // console.log("not adding:", board[i][j]);
                }
            }
            for(let val of uniqueSet){
                console.log(val);
            }
            uniqueSet.clear();
        }

        //check cols
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(uniqueSet.has(board[j][i])){
                    // console.log("failed with:", board[j][i]);
                    return false;
                }else if(board[j][i] !== "."){
                    // console.log("adding:", board[j][i]);
                    uniqueSet.add(board[j][i]);
                }
            }
            uniqueSet.clear();
        }
        // console.log(uniqueSet);
        

        //check 3x3
        for(let startR = 0; startR < board.length; startR += 3){
            for(let startC = 0; startC < board[0].length; startC += 3){
                for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        if(board[i+startR][j+startC] !== "."){
                            if(uniqueSet.has(board[i+startR][j+startC]) && board[i+startR][j+startC] !== "."){
                                console.log("failed with:", board[i+startR][j+startC]);
                                return false;
                            }else if(board[i+startR][j+startC] !== "."){
                                console.log("adding:", board[i+startR][j+startC],"at",i+startR,j+startC,"max",rows,cols);
                                uniqueSet.add(board[i+startR][j+startC]);
                            }
                        }
                    }
                }
                for(let val of uniqueSet){
                    console.log(val);
                }
                uniqueSet.clear();
          
            }
        }

        return true;
    }
}
