class MyStack {
    constructor() {
        this.q1 = []
        
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q1.push(x)
        let size = this.q1.length
        for(let i =0;i<size-1;i++){
            this.q1.push(this.q1.shift());
        }
       
    }

    /**
     * @return {number}
     */
    pop() {
       return this.q1.shift()
    }

    /**
     * @return {number}
     */
    top() {
        return this.q1[0]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q1.length == 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
