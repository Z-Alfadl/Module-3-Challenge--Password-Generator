// Assignment Code
var generateBtn = document.querySelector("#generate");

//Steps for password generation:
// Step 1: Ask for desired length (8-128 characters)
// Step 2: THEN ask to include lowercase
// Step 3: THEN ask to include uppercase
// Step 4: THEN ask to include numbers
// Step 5: THEN ask to include special characters
// Step 6: If Steps 2-5 all false, throw error
// Step 7: 

const charSetOptions = {
  num: "0123456789",
  specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|\\",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};


var generatePassword = function () {

  var charSet = "";
  var pwArray = [];
  var randPassword = "";
  // Step 1: Ask for desired length (8-128 characters)
  var pwlength = prompt('Enter the desired length of the password. Must enter a number between 8-128.');

  if (pwlength >= 8 && pwlength <= 128) {
    // Step 2: THEN ask to include uppercase characters
    var pwUpper = confirm("Include Uppercase Characters?");
    if (pwUpper) {
      charSet += charSetOptions.upperCase;
    }
    // Step 3: THEN ask to include lowercase characters
    var pwLower = confirm("Include Lowercase Characters?");
    if (pwLower) {
      charSet += charSetOptions.lowerCase;
    }
    // Step 4: THEN ask to include numbers
    var pwNumeric = confirm("Include Numeric Characters?");
    if (pwNumeric) {
      charSet += charSetOptions.num;

    }
    // Step 5: THEN ask to include special characters
    var pwSpecial = confirm("Include Special Characters?")
    if (pwSpecial) {
      charSet += charSetOptions.specialChar;
    }

    // Step 6: If Steps 2-5 all false, alert error and repeats from the start.
    if (!pwUpper && !pwLower && !pwNumeric && !pwSpecial) {
      alert('ERROR: Please select at least one option')
          generatePassword();
    }
    //Step 7: Convert password character list to array
    pwArray = Array.from(charSet);
   
    //Step 8: Randomly select characters from the array and add to password variable
    for (var i = 0; i < pwlength; i++) {
     randPassword += pwArray[Math.floor(Math.random() * pwArray.length)]
    }
    //Step 9: Return random password
    console.log(randPassword)
    return randPassword

  }
  // If selected length is less than 8 or greater than 128, sends an alert.
  else {
    alert('ERROR: Password must be between 8-128 characters');
  }


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Sources:
//https://stackoverflow.com/questions/70706563/javascript-password-generator-sometimes-not-including-character-selections

//First determine what type of characters to include
//