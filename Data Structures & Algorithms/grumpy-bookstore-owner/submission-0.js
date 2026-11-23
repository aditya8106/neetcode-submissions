class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let total = 0;
            let windowSum = 0;
                let maxSum = 0;

                    for (let i = 0; i < customers.length; i++) {
                            if (grumpy[i] === 0) {
                                        total += customers[i];
                                                } else {
                                                            windowSum += customers[i];
                                                                    }

                                                                            if (i >= minutes && grumpy[i - minutes] === 1) {
                                                                                        windowSum -= customers[i - minutes];
                                                                                                }

                                                                                                        maxSum = Math.max(maxSum, windowSum);
                                                                                                            }

                                                                                                                return total + maxSum;
    }
}
