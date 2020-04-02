// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

var passwordLength = prompt("Please choose a password length between 8 and 128.");
while(passwordLength < 8 || passwordLength > 128){
  passwordLength = prompt("That number is outside the range.  Please choose a password length between 8 and 128.");
}

var lowerCaseChoice = confirm("Should the password contain lowercase charecters?");
var upperCaseChoice = confirm("Should the password contain uppercase charecters?");
var numberChoice = confirm("Should the password contain numbers?");
var specialCharChoice = confirm("Should the password contain special charecters?");

while(!lowerCaseChoice && !upperCaseChoice && !numberChoice && !specialCharChoice){
  alert("You need to select at least one category of charecters.");
  var lowerCaseChoice = confirm("Should the password contain lowercase charecters?");
  var upperCaseChoice = confirm("Should the password contain uppercase charecters?");
  var numberChoice = confirm("Should the password contain numbers?");
  var specialCharChoice = confirm("Should the password contain special charecters?");
}

var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharArr = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '[', '}', ']', '|', '\\', ':', ';', '"', '\'', '<', ',', '>', '.', '?', '/'];

var combinedArr = [];

if(lowerCaseChoice){
  combinedArr = combinedArr.concat(lowerCaseArr);
}
if(upperCaseChoice){
  combinedArr = combinedArr.concat(upperCaseArr);
}
if(numberChoice){
  combinedArr = combinedArr.concat(numArr);
}
if(specialCharChoice){
  combinedArr = combinedArr.concat(specialCharArr);
}

var passwordTest = '';
for(var i=0; i < passwordLength; i++){
  var randomNum = Math.floor(Math.random() * (combinedArr.length));
  passwordTest = passwordTest + combinedArr[randomNum];
}
console.log(passwordTest);
return passwordTest;
}

