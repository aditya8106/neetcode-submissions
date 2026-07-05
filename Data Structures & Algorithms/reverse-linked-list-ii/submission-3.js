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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
     
     let dummy =  new ListNode(0)
     dummy.next = head
     let prev = dummy
     let curr  = head 
     for(let i =0;i<left-1;i++){
        prev = prev.next
        curr = curr.next
     }

     let sub = curr
     let preNode = null
     for(let i =0;i<=right - left;i++){
        let next = curr.next
        curr.next = preNode
        preNode = curr
        curr = next
     }

    prev.next = preNode
    sub.next = curr
    return dummy.next

    }
}
