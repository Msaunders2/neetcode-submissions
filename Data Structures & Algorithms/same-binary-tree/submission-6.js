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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let res;

        if(p === null && q === null){
            return true;
        }else if(p === null || q === null){
            return false;
        }else{
            res = dfs(p,q);
        }

        function dfs(pNode, qNode){
            if(pNode === null && qNode === null){
                return true;
            }else if(pNode === null || qNode === null){
                return false;
            }

            if(pNode.val === qNode.val){
                let left = dfs(pNode.left, qNode.left);
                let right = dfs(pNode.right, qNode.right);

                if(left && right){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }

        return res;
    }
}
