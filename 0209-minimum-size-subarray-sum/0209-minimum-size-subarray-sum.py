# two pointer strategy for window length
# while also keeping track of a running sum, and updating a min window length
# going through each number in the array once

# while current sum >= target, keep removing numbers from start of the current window,
# updating new min length if found

# update min length first before incrementing i to prevent false 0 length sub windows
# which can happen in the case one number is >= target

class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        total = 0
        i = 0
        min_len = math.inf

        for j, num in enumerate(nums):
            total += num
            
            while total >= target:
                min_len = min(min_len, j - i + 1)
                total -= nums[i]
                i += 1
        
        return min_len if min_len != math.inf else 0