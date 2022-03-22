var longestCommonPrefix = function (strs) {
  // iterate over array
  // compare current character of all elements in array
  // once a mismatch is found, return all that were matched
  // if no matches, return empty string
  // find shortestString
  const matchedArr = []
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return matchedArr.join('')
      } else if (i !== j && strs[0][i] === strs[j][i]) {
        continue
      }
    }
    matchedArr.push(strs[0][i])
  }
  return matchedArr.join('')
}

console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']))

//Figure out how to find shortest string in an array
