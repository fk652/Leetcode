class Solution(object):
    def diagonalSum(self, mat):
        """
        :type mat: List[List[int]]
        :rtype: int
        """
        i = 0
        j = len(mat) - 1
        sum = 0
        
        for row in mat:
            if (i == j):
                sum += row[i]
            else:
                sum += row[i]
                sum += row[j]
            
            i += 1
            j -= 1
            
        return sum