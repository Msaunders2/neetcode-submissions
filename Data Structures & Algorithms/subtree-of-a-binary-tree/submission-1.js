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
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let res;
        if(root === null){
            return false;
        }
        if(root.val === subRoot.val){
            res = isSameTree(root,subRoot);
        }

        let resR = this.isSubtree(root.right, subRoot);
        let resL = this.isSubtree(root.left, subRoot);

        if(res || resR|| resL){
            return true;
        }

        return false;


        function isSameTree(p,q){
            if(p === null && q === null){
                return true;
            }else if(p === null || q === null){
                return false;
            }else if(p.val !== q.val){
                return false;
            }

            let Lres = isSameTree(p.right, q.right);
            let Rres = isSameTree(p.left, q.left);

            if(Lres === true && true === Rres){
                return true;
            }else {
                return false
            }

        }

    }
}
