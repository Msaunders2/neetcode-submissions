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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root === null){
            return [];
        }

        let res = [];
        let queue = [root];       

        while(queue.length >= 1){
            let levelSize = queue.length;
            let currlevel = [];

            for(let i = 0; i < levelSize; i++){
                let node = queue.shift();
                currlevel.push(node.val);

                if(node.left){
                    queue.push(node.left);
                }
                if(node.right){
                    queue.push(node.right);
                }

            }
            res.push(currlevel);
        }
        return res;
    }
}
