# recursive binary search to find min
# using a helper function, search, to do the binary search
# use low and high pointers to keep track of current subarray end positions
# keep dividing until 1 number is left (i == j)
# if mid < high (right half is sorted), then move to left half (including mid)
# else if mid >= high (left half is sorted), then move to right half (excluding mid)

# by always discarding the sorted half, we eventually reach the rotation point 

# include/exclude mid when discarding left/right halfs to avoid infinite cycles
# when 2 numbers are left, can't properly discard left half because mid is rounded down
# so we must do mid+1 when setting it as the new low

class Solution:
    def findMin(self, nums: List[int]) -> int:
        def search(nums, low, high):
            if low == high:
                return nums[low]

            mid = math.floor((low + high) / 2)
            if (nums[mid] <= nums[high]):
                return search(nums, low, mid)
            else:
                return search(nums, mid+1, high)
            
        return search(nums, 0, len(nums)-1)