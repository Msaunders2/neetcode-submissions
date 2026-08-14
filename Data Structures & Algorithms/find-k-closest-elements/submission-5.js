class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let targInd = -1;
        let res = [];
        let need = k;

        for(let i = 0; i < arr.length; i++){
            //in between case
            if(arr[i - 1] < x && x < arr[i]){
                targInd = i;
                break;

            }else if(arr[i] === x){
                //equal num case
                targInd = i;
                res.push(arr[i]);
                need--;    
                break;
            }
        }
        
        if(targInd === -1){
            if(arr[0] > x){
                //smallest num case
                targInd = 0;
            }else{
                //largest num
                targInd = arr.length - 1;
            }
        }

        let r;
        if (res.length > 0) {
            r = targInd + 1;
        } else {
            r = targInd;
        }
        let l = targInd - 1;


        while(need > 0){
            need--;

            if(l < 0){
                res.push(arr[r]);
                r++;
            } else if(r >= arr.length){
                res.push(arr[l]);
                l--;
            } else if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)){
                res.push(arr[l]);
                l--;
            }else{
                res.push(arr[r]);
                r++;
            }
        }
        return res.sort((a,b)=>a-b);
    }
}
