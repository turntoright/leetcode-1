/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*  https://leetcode.com/problems/binary-tree-cameras/discuss/1211695/JS-Python-or-Easy-Recursive-DFS-Solution-w-Explanation
 Idea:
One of the first realizations that we can make is that we never need to place a camera on a leaf, since it would always be 
better to place a camera on the node above a leaf. This should lead us to thinking that we need to start from the bottom of 
the binary tree and work our way up.

This naturally calls for a depth first search (DFS) approach with a recursive helper function (dfs). We can navigate to the 
lowest part of the tree, then deal with placing cameras on the way back up the recursion stack, using the return values to 
pass information from child to parent.

First, we should consider the different information that will be necessary to pass up to the parent about the child node, 
and in fact there are only three:

Nothing below needs monitoring.
A camera was placed below and can monitor the parent.
An unmonitored node below needs a camera placed above.
The next challenge is to identify the different scenarios that we'll face once we've collected the values (val) of the children 
of the current node. Again, there are three scenarios:

No child needs monitoring, so hold off on placing a camera and instead return a value that indicates that the parent will have 
to place one.

One or more of the chidren need monitoring, so we will have to place a camera here. We'll want to return a value indicating that 
the parent will be monitored.

One of the children has a camera and the other child either has a camera or doesn't need monitoring (otherwise we would trigger 
the second scenario instead). This tree is fully monitored, but has no monitoring to provide to the parent; it will return the 
same value as a null branch.

With all this in mind, we can let the return value indicate how we move from one state to another. At each node if the combined 
val from below is greater than 2, then we need to place a camera. If so we should increment our counter (ans) before moving on.

One last tricky piece is the root node. If the root node returns a value indicating that it still needs a camera, we should add 
1 to ans before we return it. */

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minCameraCover = function(root) {
    let res = 0;
    
    const dfs = node => {
        if (!node) return 0;
        let val = dfs(node.left) + dfs(node.right)
        if (val === 0) return 3;
        if (val < 3) return 0;
        res++;
        return 1;
    }
    
    return dfs(root) > 2 ? res + 1 : res;
};