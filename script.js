const lowercaseletter = "abcdefghijklmnopqrstuvwxyz";
const uppercaseletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbol = "!@#$%^&*()_=+{}[]><?/";

const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("Lowercase");
const uppercaseEl = document.getElementById("Uppercase");
const numbersEl = document.getElementById("Number");
const symbolEl = document.getElementById("Symbol");
const generateBtn = document.getElementById("generate-password");
const passwordEl = document.getElementById("password");

generateBtn.addEventListener("click", function(){
    const len = lengthEl.value; 
    let characters = "";
    let password = "";

    if(lowercaseEl.checked){
        characters += lowercaseletter;
    }
    if(uppercaseEl.checked){
        characters += uppercaseletter ;
    }
    if(numbersEl.checked){
        characters += numbers;
    }
    if(symbolEl.checked){
        characters += symbol;
    }

    for(let i= 0; i < len; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordEl.value = password;
});