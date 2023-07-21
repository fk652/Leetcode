# @param {Character[][]} maze
# @param {Integer[]} entrance
# @return {Integer}

require 'set'

def nearest_exit(maze, entrance)
    queue = [[entrance[0], entrance[1], 0]]
    visited = Set.new(["#{entrance[0]} #{entrance[1]}"])
    
    while !queue.empty?
        i, j, time = queue.shift
        
        if time != 0 && (i == 0 || i == maze.length - 1 || j == 0 || j == maze[0].length - 1)
            return time
        end
        
        neighbors = [[i+1, j], [i-1, j], [i, j+1], [i, j-1]]
        neighbors.each do |x, y|
            key = "#{x} #{y}"
            if !visited.include?(key) && 
               x >= 0 && x < maze.length && y >= 0 && y < maze[0].length &&
               maze[x][y] == '.'
                queue << [x, y, time + 1]
                visited << key
            end
        end
    end
    
    -1
end