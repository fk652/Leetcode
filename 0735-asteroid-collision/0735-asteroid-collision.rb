# @param {Integer[]} asteroids
# @return {Integer[]}
def asteroid_collision(asteroids)
    stack = []
    
    asteroids.each do |size|
        if size < 0
            abs = size * -1
            while !stack.empty? && stack[-1] > 0 && stack[-1] < abs
               stack.pop() 
            end
            
            if stack.empty? || stack[-1] < 0
                stack << size
            elsif stack[-1] == abs
                stack.pop()
            end
        else
            stack << size
        end
    end
    
    stack
end