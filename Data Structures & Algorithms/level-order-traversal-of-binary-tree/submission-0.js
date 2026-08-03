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
     * @return {number[][]}
     */
    levelOrder(root) {
        let queue = []
        if(root == null) return queue

        queue.push(root)
        let res =[]
        while(queue.length){
            let size = queue.length
            let level =[]
            for(let i =0;i<size;i++){
                let curr =  queue.shift()
                level.push(curr.val)
                if(curr.left !== null) { 
                    queue.push(curr.left)
                }
                if(curr.right !== null) {
                    queue.push(curr.right)
                } 
            }
            res.push(level)
        }
        return res
    }
}
