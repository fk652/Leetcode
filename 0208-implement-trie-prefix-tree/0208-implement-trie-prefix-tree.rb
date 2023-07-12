class Trie
    def initialize()
        @children = {}
    end


=begin
    :type word: String
    :rtype: Void
=end
    def insert(word, i = 0)
        if i == word.length
            @children[""] = nil
            return
        end
            
        if !@children.has_key?(word[i])
            @children[word[i]] = Trie.new()
        end
        
        @children[word[i]].insert(word, i+1)
    end


=begin
    :type word: String
    :rtype: Boolean
=end
    def search(word, i = 0)
        if i == word.length
            return @children.has_key?("")
        end
        
        return false if !@children.has_key?(word[i])
        
        return @children[word[i]].search(word, i+1)
    end


=begin
    :type prefix: String
    :rtype: Boolean
=end
    def starts_with(prefix, i = 0)
        return true if i == prefix.length
        return false if !@children.has_key?(prefix[i])
        
        return @children[prefix[i]].starts_with(prefix, i+1)
    end


end

# Your Trie object will be instantiated and called as such:
# obj = Trie.new()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.starts_with(prefix)