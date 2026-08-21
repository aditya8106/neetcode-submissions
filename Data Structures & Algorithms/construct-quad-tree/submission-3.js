/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {
        let n = grid.length
        function dfs(rows , col , size){
            let firstval = grid[rows][col]
            for(let i = rows;i< rows+size;i++){
                for(let j = col;j<col+size;j++){
                    if(grid[i][j] !== firstval){
                        let half = size/2
                        let topleft = dfs(rows , col ,half)
                        let topright = dfs(rows, col+half , half)
                        let botleft = dfs(rows+half ,col , half)
                        let botright = dfs(rows+half , col+half , half)
                        return new Node(0,false,topleft,topright,botleft,botright)
                    }
                }

            }
            return new Node(firstval,true,null,null,null,null)
        }
        return dfs(0,0,n)
    }

}
