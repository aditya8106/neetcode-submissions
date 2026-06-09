class StockSpanner {
    constructor() {
        this.prices =[]
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        this.prices.push(price)
        let i = this.prices.length - 2
        let span =1
        while(i>=0 && this.prices[i] <= price){
            span++;
            i--;
        }
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
