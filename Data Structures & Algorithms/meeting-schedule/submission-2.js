/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals = intervals.sort((a,b) => (a.start - b.end));
        console.log(intervals);
        let res = true;

        for(let i = 1; i < intervals.length; i++){
            console.log(intervals[i].start);
            console.log(intervals[i - 1].end);
            if(intervals[i].start < intervals[i - 1].end){
                res = false;
            }
        }

        return res;
    }
}
