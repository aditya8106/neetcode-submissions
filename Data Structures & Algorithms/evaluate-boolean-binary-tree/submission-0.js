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
     * @return {boolean}
     */
    evaluateTree(root) {
        if (root.val === 0) return false;
        if (root.val === 1) return true;

        const leftVal = this.evaluateTree(root.left);
        const rightVal = this.evaluateTree(root.right);

        if (root.val === 2) {
            return leftVal || rightVal;
        }
        return leftVal && rightVal;
    }
}
