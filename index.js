function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    const firstLetter = word[startIndex];
    const lastLetter = word[endIndex];

    if (firstLetter !== lastLetter) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
