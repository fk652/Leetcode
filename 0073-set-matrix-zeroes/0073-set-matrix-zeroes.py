# first go through all nums in the matrix and find row/cols containing a 0
# then go through each recorded row/col and make all the values 0

# worst case is matrix having all 0s, ending up running through the matrix 3 times
# O(n*m) runtime, for going through the whole matrix

class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        zero_rows = set()
        zero_cols = set()
        
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    zero_rows.add(i)
                    zero_cols.add(j)
        
        for row in zero_rows:
            for j in range(len(matrix[0])):
                matrix[row][j] = 0
        
        for col in zero_cols:
            for i in range(len(matrix)):
                matrix[i][col] = 0
        
        return matrix
        