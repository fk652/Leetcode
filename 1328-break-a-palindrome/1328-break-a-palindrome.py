class Solution:
    def breakPalindrome(self, palindrome: str) -> str:
        if len(palindrome) == 1:
            return ""
    
        result = ""
        
        for i in range(len(palindrome)):
            if palindrome[i] != "a":
                for char in palindrome[i+1:]:
                    if char != "a":
                        return result + "a" + palindrome[i+1:]
                return result + palindrome[i:-1] + "b"
            else:
                result += "a"
        
        if result == palindrome:
            return palindrome[:-1] + "b"
        else:
            return result