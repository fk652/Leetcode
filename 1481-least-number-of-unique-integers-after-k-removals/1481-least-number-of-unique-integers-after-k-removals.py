class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        id_counts = {}
        for id in arr:
            if id in id_counts:
                id_counts[id] += 1
            else:
                id_counts[id] = 1
        
        sorted_counts = []
        for id in id_counts:
            sorted_counts.append([id, id_counts[id]])
        sorted_counts.sort(key = lambda x: x[1])
        
        removed_count = 0
        while removed_count < k:
            current_id, count = sorted_counts.pop(0)
            removed_count += count
            if removed_count > k:
                return len(sorted_counts) + 1
        
        return len(sorted_counts)