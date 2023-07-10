"""
# Definition for a Node.
class Node(object):
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution(object):
    def __init__(self):
        self.nodeSet = {}
        
    def cloneGraph(self, node):
        """
        :type node: Node
        :rtype: Node
        """
        if not node: 
            return
        
        if node.val in self.nodeSet:
            return self.nodeSet[node.val]
        
        clone = Node(node.val)
        self.nodeSet[node.val] = clone
        
        for neighbor in node.neighbors:
            clone.neighbors.append(self.cloneGraph(neighbor))
            
        return clone
        
                
            