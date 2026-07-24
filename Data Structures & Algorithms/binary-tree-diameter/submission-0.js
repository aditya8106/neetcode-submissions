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
    diameterOfBinaryTree(root) {
       let dia = 0
       function dfs(node){
        if(node == null) return 0;
        let leftH = dfs(node.left);
        let rightH = dfs(node.right);
        dia = Math.max(dia , leftH + rightH);
        return 1+Math.max(leftH , rightH)
       }
       dfs(root)
       return dia
    }
}
