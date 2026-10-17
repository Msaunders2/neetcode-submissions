class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let sorted = intervals.sort((a,b) => (a[0] - b[0]));
        let needMerge = false;
        let mergeStart;
        let mergeEnd;
        let res = [];

        for(let i = 0; i < sorted.length - 1; i++){
            let currEnd = needMerge ? mergeEnd : sorted[i][1];

            if(sorted[i+1][0] <= currEnd){
                //overlapping
                if(!needMerge){
                    mergeStart = sorted[i][0];
                    mergeEnd = sorted[i][1];
                    needMerge = true;
                }
                mergeStart = Math.min(mergeStart, sorted[i+1][0]);
                mergeEnd = Math.max(mergeEnd, sorted[i+1][1]);

            }else{
                if(needMerge){
                    res.push([mergeStart, mergeEnd]);
                    needMerge = false;
                }else{
                    res.push(sorted[i]);
                }
            }

        }
        if(needMerge){
            res.push([mergeStart, mergeEnd]);
            needMerge = false;
        }else{
            res.push(sorted[sorted.length-1]);
        }

        return res;
    }
}
