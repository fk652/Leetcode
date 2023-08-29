# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}

def two_sum(nums, target):
    num_idx = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in num_idx:
            return [num_idx[diff], i]
        num_idx[num] = i
