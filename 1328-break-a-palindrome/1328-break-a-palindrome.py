class Solution:
    def breakPalindrome(self, palindrome: str) -> str:
        if len(palindrome) == 1:
            return ""
        
        for i in range(len(palindrome)):
            if palindrome[i] != "a":
                for char in palindrome[i+1:]:
                    if char != "a":
                        return palindrome[:i] + "a" + palindrome[i+1:]
                return palindrome[:-1] + "b"
        
        return palindrome[:-1] + "b"