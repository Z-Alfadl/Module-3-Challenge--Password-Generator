// Assignment Code
var generateBtn = document.querySelector("#generate");

//Each object property contains a string of characters of a particular type
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

  // If the prompt response is less than 8 or greater than 128, alert error and repeat.
  if (pwlength < 8 || pwlength > 128) {
    alert('ERROR: Please enter a number between 8 and 128.');
    return generatePassword();
  }  else {
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
      alert('ERROR: Please make sure to allow at least one set of characters.')
         return generatePassword();
    }
    //Step 7: Convert password character list to array
    pwArray = Array.from(charSet);
   
    //Step 8: Randomly select characters from the array and assign to randPassword
    for (var i = 0; i < pwlength; i++) {
     randPassword += pwArray[Math.floor(Math.random() * pwArray.length)]
    }
    //Step 9: Return random password
    return randPassword

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



