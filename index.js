function isPalindrome(word) {
  // Write your algorithm here
  for(startIndex=0;startIndex<word.length/2;startIndex++){
  const endIndex=word.length-1-startIndex;
    if (word[startIndex]!==word[endIndex]){
      return false
    } else{
      return true
    }
  }
}

/* 
  Add your pseudocode here
  iterate over the string from the begginning to the middle
  compare letters at the begginning and letters at the end of string
   if letters fail to match, return false
  if middle is raeched and all the letters at begginning and end match, return true 
*/

/*
  Add written explanation of your solution here
  The function iterates over the string and compares half of it to the other remainng half in corresponding positions. Once the function figures out that the letters are not equal, it would return a false. 
  On the other hand, if the letters are equal, it would return a true value
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
