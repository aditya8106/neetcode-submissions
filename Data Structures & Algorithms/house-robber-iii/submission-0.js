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
    rob(root) {
        function dfs(node){
            if(node === null){
                return [0,0];
            }
            let left = dfs(node.left)
            let right = dfs(node.right)
            let rob = node.val + left[1] + right[1]
            let notrob = Math.max(left[0] , left[1]) + Math.max(right[0] , right[1]);
            return [rob , notrob]
        }
        let result = dfs(root)
        return Math.max(result[0] , result[1])
    }
}
