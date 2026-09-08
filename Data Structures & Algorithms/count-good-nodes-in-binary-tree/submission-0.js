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
     * @return {number}
     */
    goodNodes(root) {
        let goodCt = 0
        let maxVal = -Infinity;

        if(root === null){
            return goodCt;
        }

        checkPath(root, maxVal);

        return goodCt;

        function checkPath(node, maxVal){

            if(node === null){
                return goodCt;
            }

            if(node.val >= maxVal){
                goodCt++;
                maxVal = node.val;

            }

            checkPath(node.left, maxVal);
            checkPath(node.right, maxVal);

        
        }
    }
}
