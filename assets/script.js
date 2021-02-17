// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Character and length checks
// Define check variables in global scope
var lowercaseCheck;
var uppercaseCheck;
var numberCheck;
var symbolCheck;
// Define Length of password value in global scope
var passwordLength;

// Function to prompt user of which characters to include in password, and set boolean values
function parameterChecks(){
  lowercaseCheck = confirm("Do you want lowercase letters in this password?");
  uppercaseCheck = confirm("Do you want uppercase letters in this password?");
  numberCheck = confirm("Do you want numbers in this password?");
  symbolCheck = confirm("Do you want special characters in this password?");
}

// Random password generation functionality 
// Define arrays and final password string variables
var passwordGenArray;
var finalPasswordArray;
var finalPassword;

// Function to randomize password character selection array
function randomizeArray(){
    // Clears array for generated characters
    passwordGenArray = [];
    // Statements to push a randomly generated character of a specific type to passwordGenArray
    if (lowercaseCheck === true){
        passwordGenArray.push(getRandomLowerCase());
    }
    if (uppercaseCheck === true){
        passwordGenArray.push(getRandomUpperCase());
    }
    if (numberCheck === true){
        passwordGenArray.push(getRandomNumber());
    }    
    if (symbolCheck === true){
        passwordGenArray.push(getRandomSpecial());
    }
    // Functions for generating characters
    function getRandomLowerCase(){
        return String.fromCharCode(Math.floor(Math.random()*26)+97);
    }
    function getRandomUpperCase(){
        return String.fromCharCode(Math.floor(Math.random()*26)+65);
    }
    function getRandomNumber(){
        return String.fromCharCode(Math.floor(Math.random()*10)+48);
    }
    function getRandomSpecial(){
        var symbol = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        return symbol.charAt(Math.floor(Math.random()*symbol.length));
    }
}

// Generate random password functionality
function generatePassword(){
  // Prompts user to define length of password
  passwordLength = parseInt(prompt("How long should the password be?\nPlease type in a number from 8 to 128."));
  // Failsafe if user doesn't enter a valid number
  if (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("You must type in a number from 8 to 128!\nClick \"Generate Password\" again.");
    return "Error!";
  } else {
  parameterChecks();
  // Failsafe if user selects false on all character types
  if (lowercaseCheck === false && uppercaseCheck === false && numberCheck === false && symbolCheck === false){
    alert("You must select at least one character type to include to generate a password!\nClick \"Generate Password\" again.");
    return "Error!";
  }
  // Clears finalPasswordArray of any old values
  finalPasswordArray = [];
  // For loop that repeats based on passwordLength value
  for (var i = 0; i < passwordLength; i++){
      randomizeArray();
      finalPasswordArray.push(passwordGenArray[Math.floor(Math.random()*passwordGenArray.length)]);
  }
  // Join together generated array to a string, and returns it
  finalPassword = finalPasswordArray.join("");
  return finalPassword;
  }
}