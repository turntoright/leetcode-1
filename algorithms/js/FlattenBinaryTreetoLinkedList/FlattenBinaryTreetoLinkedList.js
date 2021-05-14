/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if (root === null) return;
    if (root.left) {
        let lastLeft = root.left;
        while (lastLeft.right) lastLeft = lastLeft.right;
        lastLeft.right = root.right;
        root.right = root.left;
        root.left = null;
    }
    flatten(root.right);
};