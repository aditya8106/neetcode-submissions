class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
    const n = grid.length;
    const total = n * n;

    const freq = new Array(total + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            freq[grid[i][j]]++;
        }
    }

    let repeated = -1;
    let missing = -1;

    for (let num = 1; num <= total; num++) {
        if (freq[num] === 2) {
            repeated = num;
        } else if (freq[num] === 0) {
            missing = num;
        }
    }

    return [repeated, missing];
    }
}
