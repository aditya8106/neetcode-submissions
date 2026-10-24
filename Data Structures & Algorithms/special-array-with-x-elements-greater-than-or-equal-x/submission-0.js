class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    specialArray(nums) {
         nums.sort((a, b) => b - a);

    for (let x = 0; x <= nums.length; x++) {
        if (nums.filter(num => num >= x).length === x) {
            return x;
        }
    }

    return -1;
    
    }
}
