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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let rootRes = [];

        if(root === null){
            return rootRes;
        }

        traverse(root);

        function traverse(node){
            if(node === null){
                rootRes.push(null)
                return;
            }

            rootRes.push(node.val);
        
            traverse(node.left);
            traverse(node.right);

            return node.val;
        }

        return rootRes;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        
        if(data.length === 0){
            return null;
        }

        let index = 0;
        return build();

        function build(){
            if (index >= data.length) {
                return null;
            }

            let val = data[index];
            index++;

            if(val === null){
                return null;
            }

            let node = new TreeNode(val);


            node.left = build();
            node.right = build();

            return node;
        }

    }
}
