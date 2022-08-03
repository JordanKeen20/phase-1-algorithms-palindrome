function isPalindrome(word) {
  // My algorithm 
  if(word.split('').reverse().join('') === word){
      return true}
    else {
        return false}
}
isPalindrome('rob')


/* 
if you put in: 'bob'
what will return : true

if you put in : 'robby'
what will return : false
*/

/*
Written Explanation:
The function will take one argument, that is a string. 
The string will then be split appart, reversed, and then joined again.
Thats when it will be determind if it is true or false. 
If the word is the same as what was passed through the funcion
it will come back true. If it is different it will come back false.

*/

// You can run `node index.js` to view these console logs
 if (require.main === module) {
// my custom tests
  console.log('expecting: true')
  console.log('=>', isPalindrome('redivider'))

  console.log(' ')

  console.log('expecting: false')
  console.log('=>', isPalindrome('Allibaba'))

  console.log(' ')

  // console.log("Expecting: true");
  // console.log("=>", isPalindrome("racecar"));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
