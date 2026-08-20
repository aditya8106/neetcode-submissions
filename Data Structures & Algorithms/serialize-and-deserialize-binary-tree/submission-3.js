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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let res = []
        function dfs(node){
            if(node === null){
                res.push('N')
                return
            }
            res.push(node.val)
            dfs(node.left)
            dfs(node.right)
        }
        dfs(root)
        return res.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let val = data.split(',')
        let i =0
        function dfs(){
            if(val[i] === 'N'){
                i++
                return null
            }
            let node = new TreeNode(Number(val[i]));
            i++;
            node.left=dfs()
            node.right = dfs()
            return node
        }
        return dfs()
    }
}
