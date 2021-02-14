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
  // Reset choices for characters to be generated
  var filteredArray = [];
  // Prompts user for password length, and set passwordLength variable to a number from 8-128
  var passwordLength = prompt("How long should the password be?\n Please type in a number from 8 to 128.");
    if (passwordLength === null) {
      alert("If you want to generate a password again, please click the generate password button!");
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert("You must type in a number from 8 to 128!");
      generatePassword();
    } else {
      // Password character inclusion variables and array edits
      var includeLowercase = confirm("Do you want lowercase letters in this password?");
        if (includeLowercase === true) {
          var step1Array = [...lowercaseArray];
        } else {
          step1Array = [];
        }
      var includeUppercase = confirm("Do you want uppercase letters in this password?");
        if (includeUppercase === true) {
          var step2Array = [...step1Array, ...uppercaseArray];
        } else {
          step2Array = [...step1Array];
        }
      var includeNumber = confirm("Do you want numbers in this password?");
        if (includeNumber === true) {
          var step3Array = [...step2Array, ...numArray];
        } else {
          step3Array = [...step2Array];
        }
      var includeSpecial = confirm("Do you want special characters in this password?");
        if (includeSpecial === true) {
          filteredArray = [...step3Array, ...specialArray];
        } else {
          filteredArray = [...step3Array];
        }
        // Failsafe in case user selects no character options
        if (includeLowercase === false && includeUppercase === false && includeNumber === false && includeSpecial === false) {
          alert("You must select at least one character type to include!");
          generatePassword();
        }
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);