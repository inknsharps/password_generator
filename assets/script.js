// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Arrays for the separate character types
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
  // Resets the filtered choice array in case the user triggers a failsafe so previously chosen criteria does not carry over
  var filteredArray = [];
  // Prompts user for password length, and set passwordLength variable to a number from 8-128
  var passwordLength = prompt("How long should the password be?\nPlease type in a number from 8 to 128.");
    // Failsafe if user clicks cancel during the prompt
    if (passwordLength === null) {
      alert("If you want to generate a password again, please click the generate password button!");
    // Failsafe for user entering a number outside of intended values
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert("You must type in a number from 8 to 128!\nClick \"Generate Password\" again.");
      return "Error!";
    } else {
      // Character type selection prompts for creating the filteredArray, that will be used for password generation
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
        // Failsafe in case user selects no to all character options
        if (includeLowercase === false && includeUppercase === false && includeNumber === false && includeSpecial === false) {
          alert("You must select at least one character type to include to generate a password!\nClick \"Generate Password\" again.");
          return "Error!";
        }
    }   
    // Initialize array for randomly generated password
    var genCharacter = [];
    // For loop that, 1) Get a random value from the filtered array, 2) Pushes it to add it to the genCharacter array, and repeats until it reaches the user defined password length
    for (var i = 0; i < passwordLength; i++) {
      genCharacter.push(filteredArray[Math.floor(Math.random() * filteredArray.length)]);
    }
    // Joins together the values in the genCharacter array, and returns it to display on the HTML element
    return genCharacter.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);