class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        let n = heights.length
        let stack =[]
        let maxarea = 0
        for(let i=0;i<=n;i++){
            let currentHeight = (i === n) ? 0:heights[i];
            while(stack.length && currentHeight < heights[stack[stack.length -1]]){
                let top = stack.pop()
                let height = heights[top]
                let right = i
                let left = (stack.length === 0) ? -1:stack[stack.length-1];
                let width = right -left - 1
                let area  = height * width
                maxarea = Math.max(maxarea , area)
            }
            stack.push(i)
        }
        return maxarea;
    }
}
