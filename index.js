function isPalindrome(word) {
  // Write your algorithm here
    for(let i=0;i<word.length;i++){
    if(word.charAt(i) === word.charAt((word.length-1)-i)){
        return true
    }else{
        return false;
    }
    }
    
}
console.log(isPalindrome('mum'));

/* 
  Add your pseudocode here
  intitialize a function for the check palindrome property
  inside the function use a loop to compare elements with their corresponding elements from the reverse positions in the strings.
  if a letter corresponds with its corresponding letter from behind the string, return true
  If a letter doesnt correspond with its corresponding from behind, return false
*/

/*
  Add written explanation of your solution here
  The function uses a loot to loop through the elements and the letters of the string. It the checks if the element at a
  given position in the string is equalto the element at a similar position from the reverse of the position.
  It then returns true for each that passes the test and false for any that doesn't
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
