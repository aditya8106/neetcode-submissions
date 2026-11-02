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
     * @return {boolean}
     */
    leafSimilar(root1, root2) {
        const leaves1 = [];
        const leaves2 = [];

        function getLeaves(node, leaves) {
            if (!node) return;
            if (!node.left && !node.right) {
                leaves.push(node.val);
                return;
            }
            getLeaves(node.left, leaves);
            getLeaves(node.right, leaves);
        }

        getLeaves(root1, leaves1);
        getLeaves(root2, leaves2);

        if (leaves1.length !== leaves2.length) return false;
        for (let i = 0; i < leaves1.length; i++) {
            if (leaves1[i] !== leaves2[i]) return false;
        }

        return true;
    }
}
