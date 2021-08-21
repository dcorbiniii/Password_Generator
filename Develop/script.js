// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword(passwordLength) {
    var char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+";
    var passwordLength = 16;
    var password = "";

    for (var i=0; i<passwordLength; i++){
      var randomNumber = Math.floor (Math.random() * char.length);
      password += char.substring(randomNumber,randomNumber + 1);

      generateBtn.innerHTML = password;
      
    }
    return generateBtn.innerHTML = password;

    //document.getElementbyid("password").value = password;
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


