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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        function dfs(node,remaining){
            if(node == null){
                return false
            }
            remaining-= node.val
            if(node.left === null && node.right === null ){
                return remaining === 0
            }
            let left = dfs(node.left,remaining)
            let right = dfs(node.right,remaining)
            return left||right
        }
       return dfs(root , targetSum)
    }
}
