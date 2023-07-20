# @param {String} digits
# @return {String[]}
def letter_combinations(digits)
    return [] if digits.empty?
    
    phone_mappings = {
        "2" => ["a", "b", "c"],
        "3" => ["d", "e", "f"],
        "4" => ["g", "h", "i"],
        "5" => ["j", "k", "l"],
        "6" => ["m", "n", "o"],
        "7" => ["p", "q", "r", "s"],
        "8" => ["t", "u", "v"],
        "9" => ["w", "x", "y", "z"]
    }
    result = [""]
    
    digits.each_char do |digit|
        subresult = []
        
        phone_mappings[digit].each do |letter|
           result.each do |prev|
              subresult << prev + letter 
           end
        end
        
        result = subresult
    end
    
    result
end