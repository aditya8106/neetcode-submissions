/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        if(root === null) return 0
        let sum = 0
        if(root.val >= low && root.val <=high){
            sum+=root.val
        }
        let left = this.rangeSumBST(root.left,low,high)
        let right = this.rangeSumBST(root.right,low,high)
        return sum + left + right
    }
}
