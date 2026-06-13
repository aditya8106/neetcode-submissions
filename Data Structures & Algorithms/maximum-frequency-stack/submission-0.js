class FreqStack {
    constructor() {
        this.freq = new Map();      // value -> frequency
        this.group = new Map();     // frequency -> stack of values
        this.maxFreq = 0;           // current highest frequency
    }

    push(val) {

        // increase frequency of val
        let f = (this.freq.get(val) || 0) + 1;
        this.freq.set(val, f);

        // update maximum frequency seen
        if (f > this.maxFreq) {
            this.maxFreq = f;
        }

        // create stack for this frequency if missing
        if (!this.group.has(f)) {
            this.group.set(f, []);
        }

        // put value into its frequency stack
        this.group.get(f).push(val);
    }

    pop() {

        // get stack of highest frequency
        let stack = this.group.get(this.maxFreq);

        // most recent element with max frequency
        let val = stack.pop();

        // decrease its frequency
        this.freq.set(val, this.freq.get(val) - 1);

        // if this frequency stack becomes empty
        if (stack.length === 0) {
            this.maxFreq--;
        }

        return val;
    }
}
/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
