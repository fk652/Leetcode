# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def sort_colors(nums, i = 0, j = nums.length-1)
    return nums if i >= j
    
    mid = (j + i) / 2
    left = sort_colors(nums, i, mid)
    right = sort_colors(nums, mid+1, j)
    
    return merge(nums, i, mid, mid+1, j)
end

def merge(nums, left_i, left_j, right_i, right_j)
    while left_i <= left_j && right_i <= right_j
        if nums[left_i] > nums[right_i]
            j = right_i
            while j != left_i
                nums[j], nums[j-1] = nums[j-1], nums[j] 
                j -= 1
            end
            
            left_i += 1
            right_i += 1
            left_j += 1
        else
            left_i += 1
        end
    end
    
    return nums
end