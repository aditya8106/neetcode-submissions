class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        let n = heights.length
        let maxarea = 0
        for(let i=0;i<n;i++){
            let minh = Infinity
            for(let j =i;j<n;j++){
                minh =Math.min(minh ,heights[j]);
                let width = j-i+1
                let area = minh * width
                maxarea = Math.max(maxarea , area)
            }
        }
        return maxarea;
    }
}
