/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    var rightSum = new Array(nums.length);
    var leftSum = new Array(nums.length);
    leftSum[0] = 0;
    rightSum[nums.length - 1] = 0;
    for(let i = nums.length - 2; i > -1; i--)
        {
            rightSum[i] = nums[i+1] + rightSum[i+1];
        }
    for(let j = 1; j < nums.length; j++)
    {
        leftSum[j] = nums[j-1] + leftSum[j-1];
    }
    for(let pivot = 0; pivot < nums.length; pivot++)
        {
            if(leftSum[pivot] == rightSum[pivot])
                {
                    return pivot;
                }
        }
    return -1;
};