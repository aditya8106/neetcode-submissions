/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
         let temp = head 
         let visited = new Set()
        while(temp != null){
            if(visited.has(temp)){
                return true
            }
            visited.add(temp);
            temp = temp.next
         }
         return false
    }
}
