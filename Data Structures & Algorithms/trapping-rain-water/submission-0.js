class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let lMax =0
        let RMax =0
        let tot =0
        let left =0
        let right =height.length-1;
        while(left<right){
            if(height[left] <= height[right]){
                if(lMax > height[left]){
                    tot+=lMax-height[left]
                }else{
                    lMax=height[left];
                }
                left++
            }else{
                if(RMax > height[right]){
                    tot+=RMax-height[right]
                }else{
                    RMax=height[right]
                }
                right--;
            }
        }
            return tot
        
    }
}
