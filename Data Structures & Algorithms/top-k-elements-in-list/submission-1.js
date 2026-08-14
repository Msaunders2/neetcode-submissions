class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        let res = [];

        for(let num of nums){

            if(freqMap.has(num)){
                freqMap.set(num, freqMap.get(num)+1);
            }else{
                freqMap.set(num,1);
            }
        }
        let freqarr = Array.from(freqMap.keys());
        freqarr.sort((a, b) => freqMap.get(b) - freqMap.get(a));

        for(let i = 0; i < k; i++){
            res.push(freqarr[i]);
        }

        return res;
    }
}
