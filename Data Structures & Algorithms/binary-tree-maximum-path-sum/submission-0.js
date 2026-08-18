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
     * @return {number}
     */
    maxPathSum(root) {
        let maxi = -Infinity
        function dfs(node){
            if(node === null){
                return 0
            }
            let left = Math.max(0,dfs(node.left))
            let right = Math.max(0,dfs(node.right))
            maxi = Math.max(maxi , node.val + left + right)
            return node.val+Math.max(left , right)
        }
        dfs(root)
        return maxi;
    }
}
