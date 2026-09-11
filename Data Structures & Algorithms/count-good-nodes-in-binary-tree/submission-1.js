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
        let goodCt = 0;
        if(root === null){
            return goodCt;
        }

        let maxVal = root.val;
        checkNode(root,maxVal);

        function checkNode(node,maxVal){
            if(node === null){
                return goodCt;
            }

            if(node.val >= maxVal){
                goodCt++;
                maxVal = node.val;
            }
            checkNode(node.left,maxVal);
            checkNode(node.right,maxVal);

        }

        return goodCt;
    }
}
