class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let map = new Map();

        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])){
                map.set(nums[i], map.get(nums[i]) + 1);
            }else{
                map.set(nums[i], 1);
            }
        }

        let keys = map.keys();

        for(let key of keys){
            let val = map.get(key);
            

            for(let i = 0; i < val; i++){
                if(key === 0){
                    nums[i] = key;
                }else if(key === 1){
                    if(map.has(0)){
                        nums[i + map.get(0)] = key;
                    }else{
                        nums[i] = key;
                    }
                }else{
                    if(map.has(0) && map.has(1)){
                        nums[i + map.get(0) + map.get(1)] = key;
                    }else if(map.has(0) && !map.has(1)){
                        nums[i + map.get(0)] = key;
                    }else if(map.has(1) && !map.has(0)){
                        nums[i + map.get(1)] = key;
                    }else{
                        nums[i] = key
                    }
                }
            }
        }
    }
}
