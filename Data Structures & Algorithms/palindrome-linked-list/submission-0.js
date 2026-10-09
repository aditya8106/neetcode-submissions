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
    isPalindrome(head) {
        let res = []
        let curr = head 
        while(curr !== null){
            res.push(curr.val)
            curr = curr.next
        }
        let left = 0
        let right =  res.length-1
        while(left < right){
            if(res[left] !== res[right]){
                return false
            }
            left++
            right--
        }
        return true
    }
}
