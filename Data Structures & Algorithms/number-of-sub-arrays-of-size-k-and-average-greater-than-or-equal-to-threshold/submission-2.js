class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let res = 0;
        let sum = 0;
        for(let i = 0; i < k;i++){
            sum += arr[i];
        }

        let avg = sum/k;
        if(avg >= threshold){
            res++;
        }

        for(let start = 0; start <= arr.length - k ; start++){
            sum = sum - arr[start] + arr[start + k];
            avg = sum/k;

            if(avg >= threshold){
                res++;
            }
        }
        return res;
    }
}
