class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let p1 = 0;
        let p2 = 0;
        let mid = Math.floor((nums1.length + nums2.length)/2);

        let mostRec;
        let prev;

        while(p1 + p2 <= mid){
            prev = mostRec;

            if(p1 >= nums1.length){
                mostRec = nums2[p2];
                p2++;
               
            }else if(p2 >= nums2.length){
                mostRec = nums1[p1];
                p1++;  
            }else if(nums1[p1] < nums2[p2]){
                mostRec = nums1[p1];
                p1++; 
            }else{
                mostRec = nums2[p2];
                p2++;

            }
        }
       

        if((nums1.length + nums2.length) % 2 === 0){
            mostRec = (mostRec + prev)/2;
        }

        return mostRec;

    }
}
