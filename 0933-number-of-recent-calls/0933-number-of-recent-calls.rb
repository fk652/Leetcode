class RecentCounter
    def initialize()
        @counter = []
    end


=begin
    :type t: Integer
    :rtype: Integer
=end
    def ping(t)
        while !@counter.empty? && t - @counter[0] > 3000
            @counter.shift()
        end
        
        @counter << t
        return @counter.length
    end


end

# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter.new()
# param_1 = obj.ping(t)