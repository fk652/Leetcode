# @param {Integer[][]} grid
# @return {Integer}
def oranges_rotting(grid)
    fresh_count = 0
    queue = []
    min_time = 0
    
    (0...grid.length).each do |i|
       (0..grid[0].length).each do |j|
          if grid[i][j] == 1
              fresh_count += 1
          elsif grid[i][j] == 2
             queue << [i, j, 0]
          end
       end
    end
    
    while queue.length > 0
        i, j, time = queue.shift()
        min_time = time if time > min_time
        
        neighbors = [[i+1, j], [i-1, j], [i, j+1], [i, j-1]]
        neighbors.each do |x, y|
            if (x >= 0 && x < grid.length &&
                y >= 0 && y < grid[0].length && grid[x][y] == 1)
                grid[x][y] = 2
                fresh_count -= 1
                queue.push([x, y, time+1])
            end
        end
    end
    
    return -1 if fresh_count > 0
    min_time
end