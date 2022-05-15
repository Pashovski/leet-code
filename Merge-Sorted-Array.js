/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // calculate the last element in nums1 via m+n-1
  let insertIndex = m + n - 1
  // decrement n and m by 1, each
  // now we can begin comparing elements at m and n index within nums1 and nums2
  m = m - 1
  n = n - 1
  // iterate while n is greater or equal to 0
  while (n >= 0) {
    // assign the element in nums1 at insertIndex to result of the following
    // if nums1[m] is greater than nums2[n]
    if (nums1[m] > nums2[n]) {
      // assign nums1[insertIndex] to the value at nums1[m]
      nums1[insertIndex] = nums1[m]
      // decrement m by 1
      m = m - 1
    } else {
      // otherwise, nums2[n] must be equal to or greater than nums1[m]
      // so assign nums1[insertIndex] to nums2[n]
      nums1[insertIndex] = nums2[n]
      // decrement n by 1
      n = n - 1
    }
    // decrememnt insertIndex by 1
    insertIndex = insertIndex - 1
  }
  // while loop is finished because n is less than 0
  // so return nums1 array
  return nums1
}
// for running in vscode/terminal with node command
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
