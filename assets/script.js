const listOfNumbers = [1,2,3,4,5,6,7,8,9,0]
//contains 10 items
const listOfLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//contains 26 items
const listOfSpecialCharacters = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"]
//contains 27 items
const listOfUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//contains 26 items


const containUppercase = document.getElementById("upper-case");
const containLowercase = document.getElementById("lower-case");
const containNumbers = document.getElementById("numbers");
const containSpecial = document.getElementById("special-character");
const rangeValue = document.getElementById("password-range");
const generatePassword = document.getElementById("generate");

rangeValue.addEventListener("input", function(event){
// shows current slider value next to the slider
    passwordLength = rangeValue.value;
    document.getElementById("password-length").innerHTML = passwordLength;
})

generatePassword.addEventListener("click", function(event){
    hasLowercase = containLowercase.checked;
    hasUppercase = containUppercase.checked;
    hasNumbers = containNumbers.checked;
    hasSpecial = containSpecial.checked;
    passwordLength = rangeValue.value;

   const finishedPassword = [];
    
    for (var i = 0; i < passwordLength; i++) {
        x = Math.floor(Math.random() * 4); //generates a number between 0 and 3
        if (x == 0 && hasLowercase) {
            const selectedLowercase = listOfLowercase[Math.floor(Math.random() * 26)]; //sets selectedLowercase to a random lowercase letter
            finishedPassword.push(selectedLowercase);
        }
         else if (x == 1 && hasUppercase) {
            const selectedUppercase = listOfUppercase[Math.floor(Math.random() * 26)];
            finishedPassword.push(selectedUppercase);
        }
        else if (x == 2 && hasNumbers) {
            const selectedNumber = listOfNumbers[Math.floor(Math.random() * 10)];
            finishedPassword.push(selectedNumber);
        }
        else if (x == 3 && hasSpecial) {
            const selectedSpecial = listOfSpecialCharacters[Math.floor(Math.random() * 27)];
            finishedPassword.push(selectedSpecial);
        } else {i--}
    
    }
    document.getElementById("password").innerHTML = finishedPassword;
  
// need to remove ,'s from password 


    // console.log(hasLowercase);
    // console.log(hasUppercase);
    // console.log(hasNumbers);
    // console.log(hasSpecial);
    // console.log(passwordLength);
    // console.log(listOfUppercase);

    // grabs the data from checkboxes and slider and logs it when you press the button



})