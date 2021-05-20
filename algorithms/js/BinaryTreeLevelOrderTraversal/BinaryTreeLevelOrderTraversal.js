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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const q = [root], ans = [];
    while(q[0]) {
        const row = [], len = q.length;
        for (let i = 0; i < len; i++) {
            const curr = q.shift();
            row.push(curr.val);
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
        ans.push(row);
    }
    return ans;
};