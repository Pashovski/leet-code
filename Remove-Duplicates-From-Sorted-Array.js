/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i+1] === nums[i]) {
        nums.splice(i+1, 1);
        --i;
      } else {
        continue;
      }
    }
    return nums.length;
};

console.log(removeDuplicates([1,1,2]))

