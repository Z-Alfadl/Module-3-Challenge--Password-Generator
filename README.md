# 03 JavaScript: Password Generator

## Password Generator

The purpose of this app is to generate a password based on user provided inputs. The inputs are constraints on what kind of password is generated, such as determining the length of the generated password and 
the type of characters that are to be included.

## Usage
````
1. User clicks the "Generate Password" button.
2. User is prompted to enter the desired length of the password, between 8 and 128 characters.
3. If the user inputs is not a number within that range, for example, typing "P" or leaving the field blank, an alert is triggered and the prompt will repeat. 
4. User is then presented with various prompts on whether to include: 
    - Uppercase and/or lowercase characters (A-Z, a-z).
    - Special characters ex (!@#$).
    - Numeric characters (0-9).
5. If all of the prompt responses return false, an alert will be shown telling the user to confirm at least one of the options.
6. An array is generated containing all accepted options, which is then iterated through randomly a number of times equal to the password length set in Step 2, and added to a "password" variable.  
7. The result is then passed to a function that prints the password on the webpage.
````

## Visual

![](Assets\PW-Generator-screenshot.png)

## Source
https://stackoverflow.com/questions/70706563/javascript-password-generator-sometimes-not-including-character-selections
