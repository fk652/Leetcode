class MinStack
    def initialize()
        @stack = []
        @min = []
    end


=begin
    :type val: Integer
    :rtype: Void
=end
    def push(val)
        @stack << val
        
        if @min.length == 0 || val < @min[-1]
            @min << val
        else
            @min << @min[-1]
        end
    end


=begin
    :rtype: Void
=end
    def pop()
        @min.pop
        @stack.pop
    end


=begin
    :rtype: Integer
=end
    def top()
        @stack[-1]
    end


=begin
    :rtype: Integer
=end
    def get_min()
        @min[-1]
    end


end

# Your MinStack object will be instantiated and called as such:
# obj = MinStack.new()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.get_min()