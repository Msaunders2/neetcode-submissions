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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let startTimes = [];
        let endTimes = [];

        for(let interval of intervals){
            startTimes.push(interval.start);
            endTimes.push(interval.end);
        }

        startTimes.sort((a,b) => a - b);
        endTimes.sort((a,b) => a - b);

        let maxCount = 0;
        let roomCount = 0;
        let s = 0;
        let e = 0;

        while(s < startTimes.length){
            //not overlapping
            if(startTimes[s] < endTimes[e]){
                s++;
                roomCount++;
                //overlapping
            }else{
                roomCount--;
                e++
            }

            maxCount = Math.max(roomCount,maxCount);

        }

        return maxCount;


    }
}
