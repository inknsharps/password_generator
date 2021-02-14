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
  var passwordLength = prompt("How long should the password be?\n Please type in a number from 8 to 128.");
    if (passwordLength === null) {
      alert("If you want to generate a password again, please click the generate password button!");
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert("You must type in a number from 8 to 128!");
      generatePassword();
    } else {
    // Password character inclusion variables, sets to true or false
    var includeLowercase = confirm("Do you want lowercase letters in this password?");
    var includeUppercase = confirm("Do you want uppercase letters in this password?");
    var includeNumber = confirm("Do you want numbers in this password?");
    var includeSpecial = confirm("Do you want special characters in this password?");
      if (includeLowercase === false && includeUppercase === false && includeNumber === false && includeSpecial === false) {
        alert("You must select at least one character type to include!");
        generatePassword();
      }                           
    } 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Random generator