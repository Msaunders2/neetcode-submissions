class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let map = new Map();
        let res;

        for(let task of tasks){
            if(map.has(task)){
                map.set(task, map.get(task) + 1);
            }else{
                map.set(task,1);
            }
        }

        let distCt = map.size;

        let max = 0;
        let maxFreqCt;
        for(let [key,val] of map){
            if(val > max){
                max = val;
                maxFreqCt = 0;
            }

            if(val === max){
                maxFreqCt++;
            }
        }

        res = Math.max(tasks.length,(max - 1) * (n + 1) + maxFreqCt);

        return res;
    }
}
