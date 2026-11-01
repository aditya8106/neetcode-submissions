class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names, heights) {
        const n = names.length;
        const indices = Array.from({ length: n }, (_, i) => i);
        
        indices.sort((a, b) => heights[b] - heights[a]);
        
        return indices.map(i => names[i]);
    }
}
