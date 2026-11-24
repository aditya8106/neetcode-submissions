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
    isSymmetric(root) {
        if (!root) return true;

        const isMirror = (t1, t2) => {
            if (!t1 && !t2) return true;
            if (!t1 || !t2) return false;
            return (
                t1.val === t2.val &&
                isMirror(t1.left, t2.right) &&
                isMirror(t1.right, t2.left)
            );
        };

        return isMirror(root.left, root.right);
    }
}
