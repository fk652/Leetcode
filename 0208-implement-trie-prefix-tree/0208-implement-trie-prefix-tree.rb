class Trie
    def initialize()
        @children = {}
    end


=begin
    :type word: String
    :rtype: Void
=end
    def insert(word)
        if word.empty?
            @children[""] = nil
            return
        end
            
        if !@children.has_key?(word[0])
            @children[word[0]] = Trie.new()
        end
        
        @children[word[0]].insert(word[1..-1])
    end


=begin
    :type word: String
    :rtype: Boolean
=end
    def search(word)
        if word.empty?
            return @children.has_key?("")
        end
        
        return false if !@children.has_key?(word[0])
        
        return @children[word[0]].search(word[1..-1])
    end


=begin
    :type prefix: String
    :rtype: Boolean
=end
    def starts_with(prefix)
        return true if prefix.empty?
        return false if !@children.has_key?(prefix[0])
        
        return @children[prefix[0]].starts_with(prefix[1..-1])
    end


end

# Your Trie object will be instantiated and called as such:
# obj = Trie.new()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.starts_with(prefix)