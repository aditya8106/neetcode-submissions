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
     * @return {number[]}
     */
    rightSideView(root) {
        if (root === null) return [];
        let queue = []
        queue.push(root);
        let res = []
        while(queue.length > 0){
            let size = queue.length
            res.push(queue[size- 1].val)
            for(let i = 0;i<size;i++){
                let curr = queue.shift()
                if(curr.left !== null) {
                    queue.push(curr.left)
                }
                if(curr.right !== null){
                    queue.push(curr.right)
                }
            }
        }
        return res
    }
}
