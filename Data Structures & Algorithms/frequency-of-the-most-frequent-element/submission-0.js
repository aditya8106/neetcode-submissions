class Solution {
    /**
     * @param {number[]} numsy
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
       nums.sort((a, b) => a - b);

    let left = 0;
    let sum = 0;
    let maxFreq = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (nums[right] * (right - left + 1) - sum > k) {
            sum -= nums[left];
            left++;
        }

        maxFreq = Math.max(maxFreq, right - left + 1);
    }

    return maxFreq;
    }
}
