# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# do bfs to traverse the tree level by level
# at every iteration of the while loop, go through queue which has the entire current level
# while building up the next level in the queue, add the node values to the traversed result
# every 2nd level adds the node values in reverse

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        
        queue = [root]
        traversed = []
        
        while len(queue) > 0:
            traversed.append([])
            reverse = (len(traversed) % 2 == 0)
            
            for _ in range(len(queue)):
                node = queue.pop(0)
                
                if reverse:
                    traversed[-1].insert(0, node.val)
                else:
                    traversed[-1].append(node.val)
                
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
        return traversed
        