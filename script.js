// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Arrays for characters
// Generates arrays for both uppercase and lowercase letters
var letters = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArray = letters.split("");
var uppercaseArray = letters.toUpperCase().split("");

// Generates arrays for numbers
var num = "1234567890";
var numArray = num.split("");

// Generates arrays for special characters
var specialCharacters = ("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"); 
var specialArray = specialCharacters.split("");

// Generate a new password functionality
function generatePassword() {
  
  // Prompts user for password length, and set passwordLength variable to a number from 8-128
  var passwordlength = prompt("How long should the password be?\n Please type in a number from 8 to 128.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);