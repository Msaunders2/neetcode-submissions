class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let col = matrix[0].length - 1;
        
        // for(let i = 0; i < matrix.length; i++){
        let left = 0;
        let right = matrix.length - 1;

        while(left <= right){
        
            let mid = Math.floor((left + right)/2);

            if(matrix[mid][col] === target){
                return true;
            }else if(matrix[mid][col] < target){
                left = mid + 1;
            }else if(matrix[mid][col] >= target && matrix[mid][0] <= target){

                let left2 = 0;
                let right2 = matrix[mid].length - 1;

                while(left2 <= right2){
                    let mid2 = Math.floor((left2 + right2)/2);

                    if(matrix[mid][mid2] === target){
                        return true;
                    }else if(matrix[mid][mid2] > target){
                        right2 = mid2 - 1;
                    }else{
                        left2 = mid2 + 1;
                    }
                }
                return false;
                
            }else if(matrix[mid][col] > target){
                right = mid - 1;
            }
            
        }
        return false;
    }
}
