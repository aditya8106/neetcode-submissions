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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let arr = []
        let current = head
        while(current != null){
            arr.push(current.val)
            current = current.next
        }
        arr.splice(arr.length - n,1)
        if (arr.length === 0) return null;

    let head2 = new ListNode(arr[0]);
    let current2 = head2;

    for (let i = 1; i < arr.length; i++) {
        current2.next = new ListNode(arr[i]);
        current2 = current2.next;
    }

    return head2;
    }
}
