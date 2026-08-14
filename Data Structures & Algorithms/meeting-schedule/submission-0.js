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
        let schedule = true;

        intervals.sort((a,b) => a.start - b.start);

        for(let i = 0; i < intervals.length-1;i++){
            if(intervals[i].end > intervals[i+1].start){
                schedule = false;
            }
        }

        return schedule;

    }
}
