class Solution {
    /**
     * @param {number[]} prices
     * @return {number[]}
     */
    finalPrices(prices) {
        const stack = [];
        const result = [...prices];

        for (let i = 0; i < prices.length; i++) {
            while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
                const index = stack.pop();
                result[index] -= prices[i];
            }
            stack.push(i);
        }

        return result;
    }
}
