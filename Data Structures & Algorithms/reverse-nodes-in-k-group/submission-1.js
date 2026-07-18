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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0,0)
        dummy.next = head
        let groupPrev = dummy
        while(true){
            let Kth = groupPrev
            for(let i =0;i<k;i++){
                Kth = Kth.next
                if(Kth ===  null){
                    return dummy.next
                }
            }
            let groupN = Kth.next
            let prev = groupN
            let curr = groupPrev.next
            while(curr !== groupN){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            let temp = groupPrev.next
            groupPrev.next = Kth
            groupPrev = temp

        }
        return dummy.next
    }
}
