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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (root == null) {
            return false;
        }
            function dfs(node1 ,  node2){
            if(node1==null && node2==null){
                return true
            }else if(node1 == null ||  node2==null){
                return false
            }
                        if (node1.val !== node2.val) {
                return false;
            }
            
            let left = dfs(node1.left , node2.left);
            let right = dfs(node1.right , node2.right)
            
            return left && right
        }
        if(dfs(root , subRoot)){
            return true
        }
        return this.isSubtree(root.left , subRoot) || this.isSubtree(root.right , subRoot)
    }
}
