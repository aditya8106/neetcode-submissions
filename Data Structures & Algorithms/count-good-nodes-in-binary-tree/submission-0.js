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
    goodNodes(root) {
        let count =0
       function dfs(root, max){
            if(root == null) return null;
            if(root.val >= max ){
                count++
            }
            max= Math.max(root.val , max)
            dfs(root.left , max)
            dfs(root.right , max)
        }
        dfs(root,root.val)
        return count;
    }
}
