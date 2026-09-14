 class MinHeap {
    constructor(){
        this.heap = []
    }
    push(val){
        this.heap.push(val)
        this.heapifyUp()
    }
    pop(){
        if(this.heap.length  == 1){
            return this.heap.pop()
        }
        const  min =  this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return min;
    }
    peek(){
        return this.heap[0]
    }
    size(){
        return this.heap.length
    }
    heapifyUp(){
        let index = this.heap.length - 1
        while(index > 0){
          let parent =  Math.floor((index -1)/2)
          if(this.heap[parent] <= this.heap[index]){
            break;
          }
          [this.heap[parent] ,this.heap[index]] = [this.heap[index] , this.heap[parent]]
          index = parent 
        }
    }
    heapifyDown(){
        let index = 0
        while(true){
            let left = 2 * index + 1
            let right = 2 * index + 2
            let smallest = index
            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
 }

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();

        for (let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val);

        // Keep only k largest numbers
        if (this.minHeap.size() > this.k) {
            this.minHeap.pop();
        }

        // Root = kth largest
        return this.minHeap.peek();
    
    }
}
