class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let res = 0;
        let end = k;

        let sum = 0;
        for(let i = 0; i < k;i++){
            sum += arr[i];
        }

        let avg = sum/k;
        if(avg >= threshold){
            res++;
        }

        for(let start = 0; start <= arr.length - k ; start++){
            console.log(start,end);
            sum = sum - arr[start] + arr[end];
            avg = sum/k;
            // console.log(sum,avg)

            if(avg >= threshold){
                res++;
            }
            end++;
        }
        return res;
    }
}
