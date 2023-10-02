# can use sets for each row/col/box (i/j/k) to keep track of numbers seen
# return false if repeats are found in row/col/box
# return true if no repeats were found after going through the whole grid

# box index k = (i/3) + (3 * (j/3))
# same as getting box's row index and offset by 3 * box's column index
# can also do k = (j/3) + (3 * (i/3))

# O(n^2) runtime, for going through a square grid
# but is O(1) since the grid is always 9x9

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rowSets = [set() for i in range(9)]
        colSets = [set() for i in range(9)]
        boxSets = [set() for i in range(9)]
        
        for i in range(9):
            for j in range(9):
                num = board[i][j]
                if num == '.': continue
                
                k = math.floor(i/3) + (3 * math.floor(j/3))
                
                if num in rowSets[i] or num in colSets[j] or num in boxSets[k]:
                    return False
                
                rowSets[i].add(num)
                colSets[j].add(num)
                boxSets[k].add(num)
        
        return True