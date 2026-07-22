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
     * @return {TreeNode}
     */
    invertTree(root) {
        function dfs(node){
            if(node === null) return null;
           let left = dfs(node.left)
            let right = dfs(node.right)
            node.left = right
            node.right = left;
            return node
        }
        return dfs(root)
    }
}
