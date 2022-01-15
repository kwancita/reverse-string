function reverseString(str) {
  // type your code here
  //create var for empty string
  var newStr = ""
  //use for loop
  for (var i=str.length -1; i>= 0; i--){
    newStr += str[i];
  }
  //return reverse
  return newStr;
}
reverseString("hello")

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
