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

function writePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain? (8-128)")

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Your password will have " + passwordLength + " characters.")
  }
  else {
    alert("Invalid selection. Please enter a numeric number that is at least 8 and no more than 128.")
  }

  var lowercase = confirm("Click OK to confirm including lowercase characters.");
  var uppercase = confirm("Click OK to confirm including uppercase characters.");
  var numeric = confirm("Click OK to confirm including numeric characters.");
  var special = confirm("Click OK to confirm including special characters.");

  if (lowercase === true || uppercase === true || number === true || special === true) {
    alert("Create password now.")
  }
  else {
    alert("You must select at least one character type.")
  }
}
