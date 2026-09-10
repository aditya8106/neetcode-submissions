class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) { 

    let pairs = 0;
    let freq = new Map()
    for (let num of nums) {
        if (freq.has(num)) {
            pairs += freq.get(num);
        }

        freq.set(num, (freq.get(num) || 0) + 1);
    }

    return pairs;    
    }
}
