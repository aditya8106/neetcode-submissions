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
     let curr  = head
     let arr = []
     while(curr != null){
        arr.push(curr.val)
        curr = curr.next
     }
     left = left -1
     right = right -1
     while(left < right){
        [arr[left] , arr[right]] = [arr[right] , arr[left]]
        left++
        right--
     }
     let curr1 = head
     let i = 0
     while(curr1){
        curr1.val = arr[i]
        curr1 = curr1.next;
        i++
     }

     return head
     
    }
}
