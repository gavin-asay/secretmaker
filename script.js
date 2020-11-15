// Assignment code here

// This array carries the various characters used in the password, sorted by type
var characters = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*()[]{}/?,.<>|"];

var random = function(type_length) {
  return Math.floor(Math.random() * type_length.length);
}

var generatePassword = function() {
  // user input from HTML form defines this variable and array
  var userLength = document.getElementById("length").value;
  var selectedTypes = [
    document.getElementById("lowercase").checked,
    document.getElementById("uppercase").checked,
    document.getElementById("number").checked,
    document.getElementById("special").checked
  ]

  console.log(userLength);

  // setting up these variables for a little later
  var passwordBuild = "";
  var characterPool = "";
  // the if and else-ifs validate user input
  if ((userLength < 8 || userLength > 128) && !selectedTypes[0] && !selectedTypes[1] && !selectedTypes[2] && !selectedTypes[3]) {
    document.getElementById("error").innerHTML = "Select a number between 8 and 128.<br />Select at least one character type."
  } else if (userLength < 8 || userLength > 128) {
    document.getElementById("error").innerHTML = "Select a number between 8 and 128."
  }
  else if (!selectedTypes[0] && !selectedTypes[1] && !selectedTypes[2] && !selectedTypes[3]) {
    document.getElementById("error").innerHTML = "Select at least one character type."
  // if user input is good, the else statement makes the magic happen
  } else {
    // this for-loop collects all user-selected character types and concatenates them into a single variable string
    for (i = 0; i < 4; i++) {
      if (selectedTypes[i]) {
        characterPool += characters[i];
      }
    }
    console.log(characterPool);

    // this for-loop selects a character at random and adds it to passwordBuild, iterating userLength times
    for (i = 0; i < userLength; i++) {
      passwordBuild += characterPool.charAt(random(characterPool));
  }
    console.log(passwordBuild);
    // one pseudorandomly generated password, fresh out of the oven
    return passwordBuild;
  }
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