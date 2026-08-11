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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let map = new Map()
        for(let i =0;i<inorder.length;i++){
            map.set(inorder[i],i)
        }
        let preoderidx = 0
        function build(left , right){
            if(left > right){
                return null
            }
            let rootval = preorder[preoderidx];
            preoderidx++;
            let root = new TreeNode(rootval)
           let rootidx = map.get(rootval)
            root.left = build(left , rootidx-1)
            root.right = build(rootidx+1 , right)
            return root
        }
        return build(0,inorder.length-1)
    }
}
