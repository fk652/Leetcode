# @param {String} senate
# @return {String}
def predict_party_victory(senate)
    r_queue = []
    d_queue = []
    n = senate.length
    
    senate.each_char.with_index do |senator, i|
       if senator == "R"
           r_queue << i
       else
           d_queue << i
       end
    end
    
    while !r_queue.empty? && !d_queue.empty?
        r = r_queue.shift()
        d = d_queue.shift()
        
        if r < d
            r_queue << (r + n)
        else
            d_queue << (d + n)
        end
    end
    
    !r_queue.empty? ? "Radiant" : "Dire"
end