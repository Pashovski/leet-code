const input = document.querySelector('input')
const vowels = ['a', 'e', 'i', 'o', 'u']
const countVowels = (inputtedText) => {
  let counter = 0
  // loop over inputtedText and compare each character
  // to each character in the vowels array
  for (let i = 0; i < inputtedText.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      // check if inputtedText[i] matches any elements inside of vowels (vowels[j]);
      if (inputtedText[i] === vowels[j]) {
        //increment our counter
        counter++
        break
      }
    }
  }
  return counter
}

input.addEventListener('input', (e) => {
  count.textContent = countVowels(e.target.value)
})
