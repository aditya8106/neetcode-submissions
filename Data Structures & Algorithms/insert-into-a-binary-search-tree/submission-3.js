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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        let ans = root
        if(root == null){
            ans = new TreeNode(val)
        }
        while(root){
            if(val < root.val){
                if( root.left == null){
                    root.left = new TreeNode(val)
                    break;
                }else{
                    root = root.left
                }
            }else {
                if(root.right == null){
                    root.right = new TreeNode(val)
                    break;
                }else{
                    root = root.right
                }
            }
        }
        return ans
    }
}
