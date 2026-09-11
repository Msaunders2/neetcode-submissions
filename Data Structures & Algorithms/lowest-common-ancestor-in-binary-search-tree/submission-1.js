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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(root === null){
            return root;
        }

        let LCA = checknode(root);

        function checknode(node){   
            if(node === null){
                return node;
            }

            //greater than both
            if(p.val > node.val && q.val > node.val){
                return checknode(node.right);
            }
            //les than both
            else if(p.val < node.val && q.val < node.val){
                return checknode(node.left);
            }else{
                //greater than on less than other(curr is LCA)
                return node;
            }
           
        }

        return LCA;

    }
}
