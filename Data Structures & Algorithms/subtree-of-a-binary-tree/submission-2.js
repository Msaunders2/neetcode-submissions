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
        if(root === null){
            return false;
        }
        
        if(root.val === subRoot.val){
            if(isSameSub(root, subRoot)){
                return true;
            }
        }

        if(this.isSubtree(root.right,subRoot)){
            return true;
        }

        if(this.isSubtree(root.left,subRoot)){
            return true;
        }

        return false;

        function isSameSub(root, sRoot){
            //success case
            if(root === null && sRoot === null){
                return true;
                //fail case
            } else if(root === null || sRoot === null){
                return false;
            }else if(root.val === sRoot.val){
                let rtRes = isSameSub(root.right, sRoot.right);
                let lfRes = isSameSub(root.left, sRoot.left);

                if(rtRes && lfRes){
                    return true;
                }else{
                    return false;
                }


            }else{
                return false;
            }



        }
    }
}
