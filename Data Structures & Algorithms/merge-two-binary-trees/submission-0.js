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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {TreeNode}
     */
    mergeTrees(root1, root2) {
        if (!root1) return root2;
        if (!root2) return root1;

        const merged = new TreeNode(root1.val + root2.val);
        merged.left = this.mergeTrees(root1.left, root2.left);
        merged.right = this.mergeTrees(root1.right, root2.right);

        return merged;
    }
}
