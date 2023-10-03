# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# use recursive dfs to get all paths to leaf nodes
# keep track of the current number while going down a path
# if leaf node reached, return the current number
# otherwise add left and right path results and return the total

class Solution:
    def sumNumbers(self, root: Optional[TreeNode], curr = 0) -> int:
        if not root:
            return 0
        
        curr = (curr * 10) + (root.val)
        if not root.left and not root.right:
            return curr

        total = 0
        if root.left:
            total += self.sumNumbers(root.left, curr)
        if root.right:
            total += self.sumNumbers(root.right, curr)
        return total
        