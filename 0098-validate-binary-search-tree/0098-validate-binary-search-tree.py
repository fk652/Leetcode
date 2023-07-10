# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isValidBST(self, root, min_node = None, max_node = None):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True

        if (min_node and min_node.val >= root.val) or (max_node and max_node.val <= root.val):
            return False

        return self.isValidBST(root.left, min_node, root) and self.isValidBST(root.right, root, max_node)