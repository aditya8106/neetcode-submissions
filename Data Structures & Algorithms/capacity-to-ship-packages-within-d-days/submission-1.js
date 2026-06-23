class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {

    let left = Math.max(...weights); // minimum possible capacity
    let right = weights.reduce((sum, w) => sum + w, 0); // maximum possible capacity

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let daysNeeded = 1;
        let currentWeight = 0;

        for (let weight of weights) {
            if (currentWeight + weight > mid) {
                daysNeeded++;
                currentWeight = weight;
            } else {
                currentWeight += weight;
            }
        }

        if (daysNeeded <= days) {
            right = mid - 1; 
        } else {
            left = mid + 1;
        }
    }

    return left;

    }
}
