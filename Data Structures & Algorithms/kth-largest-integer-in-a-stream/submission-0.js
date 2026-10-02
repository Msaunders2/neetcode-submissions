class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = new MaxPriorityQueue();
        this.k = k;

        for(let num of nums){
            this.heap.enqueue(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.enqueue(val);
        
        let removed = [];
        
        for(let i = 0; i < this.k - 1; i++){
            removed.push(this.heap.dequeue());
        }

        let res = this.heap.front();

        for(let num of removed) {
            this.heap.enqueue(num);
        }

        return res;
    }
}
