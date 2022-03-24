/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let finalArr = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      finalArr.push('FizzBuzz')
    } else if (i % 3 === 0) {
      finalArr.push('Fizz')
    } else if (i % 5 === 0) {
      finalArr.push('Buzz')
    } else {
      finalArr.push(String(i))
    }
  }
  return finalArr
}
const output = fizzBuzz

console.log(output)
