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
        if(root === null && subRoot === null){
            return true;
        }else if(root === null || subRoot === null){
            return false;
        }
        if(root.val === subRoot.val){
            res = isSameTree(root,subRoot);

        }

        let ltRes = this.isSubtree(root.left, subRoot);
        let rtRes = this.isSubtree(root.right, subRoot);

        if(ltRes || rtRes || res){
            return true;
        }else{
            return false;
        }


        function isSameTree(tree1,tree2){
            if(tree1 === null && tree2 === null){
                return true;
            }else if(tree1 === null || tree2 === null){
                return false;
            }
            if(tree1.val === tree2.val){
                let lfRes = isSameTree(tree1.left,tree2.left);
                let rtRes = isSameTree(tree1.right,tree2.right);

                if(lfRes && rtRes){
                    return true;
                }

            }
        }
    }

}
