// Assignment code here
var characters = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*()[]{}/?,.<>|"];

var random = function(type_length) {
  return Math.floor(Math.random() * type_length.length);
}

var generatePassword = function() {
  var userInput = {
    length: document.getElementById("length").value,
    useLower: document.getElementById("lowercase").checked,
    useLower_array: 0,
    useUpper: document.getElementById("uppercase").checked,
    useUpper_array: 1,
    useNum: document.getElementById("number").checked,
    UseNum_array: 2,
    useSpecial: document.getElementById("special").checked,
    useSpecial_array: 3
  }

  var selectedTypes = [
    document.getElementById("lowercase").checked,
    document.getElementById("uppercase").checked,
    document.getElementById("number").checked,
    document.getElementById("special").checked
  ]

/*  var typesCount = 0;
  for (i = 0; i < 3; i++) {
    if (selectedTypes[i]) {
      typesCount += 1;
    }
  } */

  var passwordBuild = "";
  var characterPool = "";
/*
  if (typesCount === 1) {
    if (userInput.useLower) {
      for (i = 0; i < userInput.length; i++) {
        passwordBuild += characters[0].charAt(random(characters[0]));
        console.log(passwordBuild);
      }
      return passwordBuild;
    }
  }
} */

for (i = 0; i < 4; i++) {
  if (selectedTypes[i]) {
    characterPool += characters[i];
  }
}
console.log(characterPool);
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