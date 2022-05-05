/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parensObj = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  const closingsArr = []
  for (let i = 0; i < s.length; i++) {
    if (['(', '[', '{'].includes(s[i])) {
      closingsArr.push(parensObj[s[i]])
    } else {
      if (closingsArr.pop() !== s[i]) {
        return false
      }
    }
  }
  return !closingsArr.length
}
