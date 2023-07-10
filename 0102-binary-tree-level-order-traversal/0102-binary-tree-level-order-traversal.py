# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        
        traversed = []
        queue = [[root, 0]]
        
        while len(queue) > 0:
            current, level = queue.pop(0)
            
            if level >= len(traversed):
                 traversed.append([current.val])
            else:
                 traversed[level].append(current.val)
            
            if current.left:
                 queue.append([current.left, level+1])
            if current.right:
                 queue.append([current.right, level+1])
        
        return traversed