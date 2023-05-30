# 03 JavaScript: Password Generator

## Password Generator

This application is designed to generate a password based on user provided inputs. The inputs are meant to set various constraints on what kind of password is generated, such as inclusion of special characters or specific lengths.

## How It Works
````
1. User clicks the "Generate Password" button.
2. User is prompted to enter the desired length of the password, between 8 and 128 characters.
3. If the user inputs is not a number within that range, for example, typing "P" or leaving the field blank, an alert is triggered and the function will not continue to run. 
4. User is then presented with various prompts on wether to include: 
    - Uppercase and/or lowercase characters (A-Z, a-z).
    - Special characters ex (!@#$).
    - Numeric characters (0-9).
5. If all of the prompts in 4. are false, an alert will be shown telling the user to confirm at least one of the options.
6. An array is generated containing all accepted options, which is then iterated through randomly a number of times equal to the password length set in Step 2, and added to a "password" variable.  
7. The result is then passed to a function that prints the password on the webpage.
````

## Visual

![PW-Generator-screenshot](https://github.com/Z-Alfadl/Module-3-Challenge--Password-Generator/assets/113720462/9c4eee3c-d8da-42e6-8385-ef1add6389ad)

or-screenshot.png)
