const listOfNumbers = [1,2,3,4,5,6,7,8,9,0]
const listOfLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const listOfSpecialCharacters = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","?","@","[","]","^","_","{","|","}","~"]
const listOfUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
                        //lists all the possible components of the password


const containUppercase = document.getElementById("upper-case");
const containLowercase = document.getElementById("lower-case");
const containNumbers = document.getElementById("numbers");
const containSpecial = document.getElementById("special-character");
const rangeValue = document.getElementById("password-range");
const generatePassword = document.getElementById("generate");
                        // brings in the checkboxes and sliders to javascript


rangeValue.addEventListener("input", function(event){
    passwordLength = rangeValue.value;
    document.getElementById("password-length").innerHTML = passwordLength;
})
                        // shows current slider value next to the slider

generatePassword.addEventListener("click", function(event){
    hasLowercase = containLowercase.checked;
    hasUppercase = containUppercase.checked;
    hasNumbers = containNumbers.checked;
    hasSpecial = containSpecial.checked;
                         //converts checkboxes data to boolean
    
    passwordLength = rangeValue.value;
                         //sets the length of the password based on the slider value

   const finishedPassword = [];
   
   
   if (hasLowercase || hasUppercase || hasNumbers || hasSpecial) {
                         //if any of the checkboxes are selected run this code to determine password
    for (var i = 0; i < passwordLength; i++) {
        x = Math.floor(Math.random() * 4); 
                        //generates a number between 0 and 3 and sets it to x

        if (x == 0 && hasLowercase) { 
            const selectedLowercase = listOfLowercase[Math.floor(Math.random() * listOfLowercase.length)];
            finishedPassword.push(selectedLowercase);
                        //if x is 0 AND lowercase is selected, select a random lowercase letter and add it to the password
        }
         else if (x == 1 && hasUppercase) {
            const selectedUppercase = listOfUppercase[Math.floor(Math.random() * listOfUppercase.length)];
            finishedPassword.push(selectedUppercase);
                        //if x is 1 AND uppercase is selected, select a random uppercase letter and add it to the password

        }
        else if (x == 2 && hasNumbers) {
            const selectedNumber = listOfNumbers[Math.floor(Math.random() * listOfNumbers.length)];
            finishedPassword.push(selectedNumber);
                        //if x is 2 AND numbers are selected, select a random number and add it to the password

        }
        else if (x == 3 && hasSpecial) {
            const selectedSpecial = listOfSpecialCharacters[Math.floor(Math.random() * listOfSpecialCharacters.length)];
            finishedPassword.push(selectedSpecial);
                        //if x is 3 AND special Characters is selected, select a random special character and add it to the password

        } else {i--
                        // if none of the numbers line up dont move to the next line of the password (could be done better but it works)
        }
    
    }} else {alert("Your password needs something in it!")
                        //alerts user if nothing is selected (otherwise it crashs)
    }


    document.getElementById("password").innerHTML = finishedPassword.join('');
                        //prints the password to the page while removing the spaces and commas

})