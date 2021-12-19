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

    console.log(hasLowercase);
    console.log(hasUppercase);
    console.log(hasNumbers);
    console.log(hasSpecial);
    console.log(passwordLength);




})



// containUppercase.addEventListener("click", function(event){

//     hasUppercase = containUppercase.checked;
//     console.log(hasUppercase);
// })
