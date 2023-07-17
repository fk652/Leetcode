# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def sort_colors(nums)
    low = 0
    mid = 0
    high = nums.length - 1
        
    while mid <= high
        if nums[mid] == 0
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elsif nums[mid] == 1
            mid += 1
        else
            nums[high], nums[mid] = nums[mid], nums[high]
            high -= 1
        end
    end
    
    return nums
end