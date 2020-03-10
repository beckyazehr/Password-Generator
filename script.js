// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to set user preferences for password
function generatePassword() {
  // Asking user how many characters they want
  var passwordLength = prompt("How many characters would you like your password to contain? (8-128)");

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Your password will have " + passwordLength + " characters.");
  }
  else {
    alert("Invalid selection. Please enter a numeric number that is at least 8 and no more than 128 and then hit OK.");
    return "";
  }

  // Confirming types of characters user wants
  var lowercase = confirm("Click OK to confirm including lowercase characters.");
  var uppercase = confirm("Click OK to confirm including uppercase characters.");
  var numeric = confirm("Click OK to confirm including numeric characters.");
  var special = confirm("Click OK to confirm including special characters.");

  // Making sure user selected at least one criteria
  if (lowercase === true || uppercase === true || numeric === true || special === true) {
    alert("Create password now.");
  }
  else {
    alert("You must select at least one character type.");
    return "";
  }

  // Empty array to be filled based on what criteria user selected using below "if" statements
  var characterOptions = []

  if (lowercase === true) {
    characterOptions.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }
  if (uppercase === true) {
    characterOptions.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }
  if (numeric === true) {
    characterOptions.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }
  if (special === true) {
    characterOptions.push("!", "@", "#", "$", "%", "^", "&", "*")
  }

  // Empty string to be filled based on for loop selecting random characters from above array
  var computerSelection = ""

  for (var i = 0; i < passwordLength; i++) {
    computerSelection = computerSelection + characterOptions[Math.floor(Math.random() * characterOptions.length)];
  }

  return computerSelection;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
