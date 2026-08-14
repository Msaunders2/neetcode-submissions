class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = [];
        let map = new Map();
        let i = 0;

        for(let num of nums){
            if(map.has(num)){
                map.set(num, map.get(num)+1);
            }else{
                map.set(num,1);
            }
        }

        nums = [...map.entries()].sort((a,b) => (b[1] - a[1]));

        console.log(nums);

        for(let i = 0; i < k; i++){
            res.push(nums[i][0]);
        }

        return res;
    }
}
