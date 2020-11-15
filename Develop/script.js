// Assignment code here
var characters = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*()[]{}/?,.<>|"];

var random = function(type_length) {
  Math.floor(Math.random() * type_length.length);
}

var generatePassword = function() {
  var length = document.getElementById("length").value;
  var useLower = document.getElementById("lowercase").checked;
  var useUpper = document.getElementById("uppercase").checked;
  var useNum = document.getElementById("number").checked;
  var useSpecial = document.getElementById("special").checked;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log(document.getElementById("lowercase").checked);
  console.log(document.getElementById("length").value);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);