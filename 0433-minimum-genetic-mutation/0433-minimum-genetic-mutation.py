# bfs graph solution to find the shortest path from startGene to endGene
# edges are valid one letter mutations between gene strings
# first build a graph of valid mutations for each bank gene and startGene
# then run normal bfs to find the shortest path to endGene
# if no path exists, return -1
# use a visited set to prevent infinite cycles
#
# class Solution:
#     def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
#         graph = self.buildGraph([*bank, startGene])
#         queue = [startGene]
#         visited = set()
#         count = 0
#       
#         while len(queue) > 0:
#             for _ in range(len(queue)):
#                 gene = queue.pop(0)
#                 if gene == endGene:
#                     return count
#               
#                 for neighbor in graph[gene]:
#                     if neighbor not in visited:
#                         queue.append(neighbor)
#                         visited.add(neighbor)
#             count += 1
#           
#         return -1
#
#     # helper function to build the graph
#     def buildGraph(self, edges):
#         graph = defaultdict(list)
#       
#         for i in range(len(edges)):
#             for j in range(i+1, len(edges)):
#                 if self.isMutation(edges[i], edges[j]):
#                     graph[edges[i]].append(edges[j])
#                     graph[edges[j]].append(edges[i])
#                   
#         return graph
#       
#     # helper function to check if one letter difference between genes
#     def isMutation(self, str1, str2):
#         mutated = False
#       
#         for i in range(len(str1)):
#             if str1[i] != str2[i]:
#                 if mutated: 
#                     return False
#                 mutated = True
#   
#         return mutated


# alternate solution where neighbors are calculated during bfs
# and popped off the bank instead of needing a visited set
class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        queue = [startGene]
        count = 0
        
        while len(queue) > 0:
            for _ in range(len(queue)):
                gene = queue.pop(0)
                if gene == endGene:
                    return count
                
                j = 0
                while j < len(bank):
                    if self.isMutation(bank[j], gene):
                        queue.append(bank[j])
                        bank.pop(j)
                    else:
                        j += 1
            count += 1
            
        return -1
        
    # helper function to check if one letter difference between genes
    def isMutation(self, str1, str2):
        mutated = False
        
        for i in range(len(str1)):
            if str1[i] != str2[i]:
                if mutated: 
                    return False
                mutated = True
        
        return mutated