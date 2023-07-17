# @param {Integer[][]} intervals
# @return {Integer[][]}
def merge(intervals)
    intervals.sort! { |a, b| a[0] == b[0] ? a[1] <=> b[1] : a[0] <=> b[0] }
    result = []
    
    intervals.each do |interval|
        if !result.empty? && !(interval[0] > result[-1][1])
            result[-1] = [[result[-1][0], interval[0]].min, [result[-1][1], interval[1]].max]
        else
            result << interval
        end
    end

    return result
end