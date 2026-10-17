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
        let start = 0;
        let end = 0;
        let roomCt = 0;
        let maxRooms = 0;


        for(let interval of intervals){
            startTimes.push(interval.start);
            endTimes.push(interval.end);
        }

        startTimes.sort((a, b) => a - b);
        endTimes.sort((a, b) => a - b);

        while(start < startTimes.length){
            if(startTimes[start] < endTimes[end]){
                start++;
                roomCt++;
            }else{
                end++;
                roomCt--;
            }

            maxRooms = Math.max(maxRooms,roomCt);
        }

        return maxRooms;
    }
}
