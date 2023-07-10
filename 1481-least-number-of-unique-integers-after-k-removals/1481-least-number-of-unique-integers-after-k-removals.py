class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        id_counts = {}
        for id in arr:
            if id in id_counts:
                id_counts[id] += 1
            else:
                id_counts[id] = 1
        
        sorted_counts = sorted(list(id_counts.values()))
        
        removed_count = 0
        while removed_count < k:
            removed_count += sorted_counts.pop(0)
            if removed_count > k:
                return len(sorted_counts) + 1
        
        return len(sorted_counts)