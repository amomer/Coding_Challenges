class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        view = {}
        for i, value in enumerate(nums):
            remainder = target - nums[i]
            if remainder in view:
                return [i, view[remainder]]
            view[value] = i