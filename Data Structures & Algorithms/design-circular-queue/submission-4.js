class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.arr = new Array(k)
        this.cap = k
        this.front = 0
        this.rear =0
        this.size  = 0
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.size === this.cap){
            return false
        }
        this.arr[this.rear] = value
        this.rear = (this.rear + 1) % this.cap
        this.size++
        return true
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(this.size === 0){
            return false
        }
        this.front = (this.front + 1)% this.cap
        this.size--
        return true
    }

    /**
     * @return {number}
     */
    Front() {
        return this.size ==0 ?  -1 :this.arr[this.front]
    }

    /**
     * @return {number}
     */
    Rear() {

        if(this.size == 0){
            return -1
        }
        let index  =  (this.rear - 1 + this.cap) % this.cap

        return this.arr[index]
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size === 0
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size  === this.cap
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
