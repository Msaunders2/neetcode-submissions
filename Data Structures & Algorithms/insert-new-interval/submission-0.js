class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let [newStart, newEnd] = newInterval;
        let res = [];
        let i = 0;

        //first skip all interval befor the new interval
        while (i < intervals.length && intervals[i][1] < newStart) {
            res.push(intervals[i]);
            i++;
        }

          // 2. Merge all overlapping intervals
        while (i < intervals.length && intervals[i][0] <= newEnd) {
            newStart = Math.min(newStart, intervals[i][0]);
            newEnd = Math.max(newEnd, intervals[i][1]);
            i++;
        }

        res.push([newStart, newEnd]);

        while(i < intervals.length){
            res.push(intervals[i]);
            i++;
        }


        return res;
    }
}
