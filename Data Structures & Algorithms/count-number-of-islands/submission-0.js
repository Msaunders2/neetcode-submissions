class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let columns = grid[0].length;
        let islandCt = 0;

        for(let i = 0; i < rows ;i++){
            for(let j = 0; j < columns; j++){
                if(grid[i][j] === "1"){
                    islandCt++; 
                    dfs(grid,i,j);

                }
            }

        }

        function dfs(grid,i ,j){
            //check bounds/ base case
            if (i < 0 || i >= rows || j < 0 || j >= columns) return;

            //check if needs to be set to 0 first / base case
            if(grid[i][j] === "0"){
                return;
            }

            //set adjacencies to 0
            grid[i][j] = "0";

            dfs(grid,i+1,j);
            dfs(grid,i-1,j);
            dfs(grid,i,j+1);
            dfs(grid,i,j-1);

        }



        return islandCt;
    }

}
