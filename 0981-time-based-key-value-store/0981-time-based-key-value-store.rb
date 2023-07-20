class TimeMap
    def initialize()
        @map = Hash.new { |h, k| h[k] = [] }
    end


=begin
    :type key: String
    :type value: String
    :type timestamp: Integer
    :rtype: Void
=end
    def set(key, value, timestamp)
        @map[key] << [timestamp, value]
    end


=begin
    :type key: String
    :type timestamp: Integer
    :rtype: String
=end
    def get(key, timestamp)
        return "" if !@map.has_key?(key)
        
        stack = @map[key]
        low = 0
        high = stack.length - 1
        result = ""
        
        while low <= high
            mid = (high + low) / 2
            if timestamp == stack[mid][0]
                return stack[mid][1]
            elsif timestamp >= stack[mid][0]
                result = stack[mid][1]
                low = mid + 1
            else
                high = mid - 1
            end
        end

        return result
    end


end

# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap.new()
# obj.set(key, value, timestamp)
# param_2 = obj.get(key, timestamp)