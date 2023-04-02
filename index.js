function isPalindrome(word) {
  // Write your algorithm here
  let lowerCaseWord= word.toLowerCase()
  let reverseWord= lowerCaseWord.reverse()
  if (reverseWord===lowerCaseWord){
    return true
  }else{
    return false
  }
}
console.log(isPalindrome("mom"))

/* 
  Add your pseudocode here
  initialize the string
  use the toLowerCase() method to convert the string to lowercase
  iterate over each letter in the string
  perform reverse() method on the string
  if the word is a palindrome
  return true
  else return false 
  if the word is not a palindrome

*/

/*
  Add written explanation of your solution here
  the palindrome is a way to confirm if the reverse of the string is equals to the original string
  the toLowerCase() method first convert the string that is to be compared to lowercase meaning all the strings will be strictly equal since js is case sensitive
  the function the iterate over each index of the string 
  then perform the reverse() method omn the string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
