/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let sp = fp = head;
    while(fp && fp.next && fp.next.next){
        fp = fp.next.next;
        sp = sp.next;
        if(sp == fp){
            sp = head;
            while(sp !== fp){
                fp = fp.next;
                sp = sp.next;
            }
            return sp;
        }
    }
    return null;
};