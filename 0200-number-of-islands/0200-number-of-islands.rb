# @param {Character[][]} grid
# @return {Integer}
require 'set'

def num_islands(grid)
    count = 0
    visited = Set.new
    
    (0...grid.length).each do |row|
       (0...grid[0].length).each do |col|
           if grid[row][col] == "1" && !visited.include?("#{row} #{col}")
              count += 1
              bfs_explore(grid, row, col, visited)
           end
       end
    end
    
    count
end

def bfs_explore(grid, i, j, visited)
    key = "#{i} #{j}"
    
    if (i < 0 || i >= grid.length || 
        j < 0 || j >= grid[0].length || 
        grid[i][j] == "0" ||
        visited.include?(key))
        return 
    end
    
    visited << key
    
    neighbors = [[i+1, j], [i-1, j], [i, j+1], [i, j-1]]
    neighbors.each do |row, col|
       bfs_explore(grid, row, col, visited) 
    end
end