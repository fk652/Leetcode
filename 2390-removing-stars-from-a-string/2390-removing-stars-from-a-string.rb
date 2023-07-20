# @param {String} s
# @return {String}
def remove_stars(s)
    stack = []
    
    s.each_char do |char|
       if char == '*' && !stack.empty?
            stack.pop()
       else
            stack << char
       end
    end
    
    stack.join('')
end