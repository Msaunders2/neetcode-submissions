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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        //base case
        let root;
        let inorderMap = new Map();
        let preIndex = 0;


        for(let i = 0; i < inorder.length; i++){
            inorderMap.set(inorder[i], i);
        }

        root = buildSubtree(0, inorder.length - 1);

        function buildSubtree(left, right){            
            if (left > right) {
                return null;
            }

            let newVal = preorder[preIndex];
            preIndex++;
            let node = new TreeNode(newVal);
            let rootInd = inorderMap.get(newVal);

            node.left = buildSubtree(left,rootInd - 1);
            node.right = buildSubtree(rootInd + 1, right);

            return node;
        }

        return root;
    }
}
