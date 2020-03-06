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
  var passwordLength = prompt("How many characters would you like your password to contain? (8-128)");

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Your password will have " + passwordLength + " characters.");
  }
  else {
    alert("Invalid selection. Please enter a numeric number that is at least 8 and no more than 128 and then hit OK.");
  }

  //need the response of the answer saved passwordLengthResponse?


  var lowercase = confirm("Click OK to confirm including lowercase characters.");
  var uppercase = confirm("Click OK to confirm including uppercase characters.");
  var numeric = confirm("Click OK to confirm including numeric characters.");
  var special = confirm("Click OK to confirm including special characters.");

  if (lowercase === true || uppercase === true || numeric === true || special === true) {
    alert("Create password now.");
  }
  else {
    alert("You must select at least one character type.");
  }

  var lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialOptions = ["U+0021", "U+0023", "U+0024", "U+0025", "U+0026", "U+0040", "U+005E"];

  for (var i = 0; i < lowercaseOptions.length; i++) {
    if (lowercase === true) {
      var lowercaseChoice = lowercaseOptions[Math.floor(Math.random() * passwordLength)]
      console.log(lowercaseChoice);
    }
  }
  
   
  
}
