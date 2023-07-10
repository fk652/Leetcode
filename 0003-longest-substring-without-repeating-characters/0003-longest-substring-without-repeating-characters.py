class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        i = longest = 0
        charIdx = {}
        
        for j in range(len(s)):
            if s[j] in charIdx:
                i = max(charIdx[s[j]] + 1, i)
                
            longest = max(longest, j-i+1)
            charIdx[s[j]] = j
            
        return longest
        