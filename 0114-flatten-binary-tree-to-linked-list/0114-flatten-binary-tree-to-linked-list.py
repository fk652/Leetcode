# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# recursive solution involving flatenning the left and right subtrees first
# then add the flattened right to the end of the flattened left
# then setting root.right to the flattened sublist and root.left as None
# return the root as the head of the new flattened linked list
# class Solution:
#     def flatten(self, root: Optional[TreeNode]) -> None:
#         """
#         Do not return anything, modify root in-place instead.
#         """
#         if not root:
#             return None
#         if not root.left and not root.right:
#             return root
#       
#         left = self.flatten(root.left)
#         right = self.flatten(root.right)
#      
#         if not left:
#             root.right = right
#         else:
#             curr = left
#             while curr.right:
#                 curr = curr.right
#             curr.right = right
#             root.right = left
#             root.left = None
#
#         return root


# solution running pre-order dfs and putting all nodes in a traversal list
# then connecting all the traversed nodes into a linked list
# can return either root or traversed[0] as the head of the linked list
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        if not root:
            return []

        traversed = []

        def dfs(root):
            if not root:
                return
            # pre-order traversal = root -> left -> right
            traversed.append(root)
            dfs(root.left)
            dfs(root.right)
        dfs(root)

        for i in range(len(traversed) - 1):
            traversed[i].left = None
            traversed[i].right = traversed[i+1]
        
        return traversed[0]