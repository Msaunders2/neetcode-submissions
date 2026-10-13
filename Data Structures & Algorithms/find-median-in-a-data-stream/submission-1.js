class MedianFinder {
    constructor() {
        this.heap2ndHalf = new MinPriorityQueue();
        this.heap1stHalf = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if(this.heap1stHalf.size() === 0 || num > this.heap1stHalf.front()){
            this.heap2ndHalf.enqueue(num);
        }else{
            this.heap1stHalf.enqueue(num);
        }
        
        if(this.heap1stHalf.size() - this.heap2ndHalf.size() > 1){
            let element = this.heap1stHalf.dequeue();
            this.heap2ndHalf.enqueue(element);
        }else if(this.heap2ndHalf.size() - this.heap1stHalf.size() > 1){
            let element = this.heap2ndHalf.dequeue();
            this.heap1stHalf.enqueue(element);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        let res;

        //odd case: return one val
        if(((this.heap1stHalf.size() + this.heap2ndHalf.size()) % 2) === 1){
            if (this.heap1stHalf.size() === 0) {
                res = this.heap2ndHalf.front();
            } else if (this.heap1stHalf.size() > this.heap2ndHalf.size()) {
                res = this.heap1stHalf.front();
            } else {
                res = this.heap2ndHalf.front();
            }

        }else{
            //even case: calc
            let val1 = this.heap1stHalf.front();
            let val2 = this.heap2ndHalf.front();
            res = (val1 + val2)/2;

        }
        return res;
    }
}
