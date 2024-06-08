const numberOfChars = document.getElementById("numberOfChars");
const includeLowercase = document.getElementById("lowercaseLetters");
const includeUppercase = document.getElementById("uppercaseLetters");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");
const result = document.getElementById("passwordResult");

function generatePassword() {
    const passwordLength = Number(numberOfChars.value);
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = lowercaseChars.toUpperCase();
    const numberChars = "0123456789";
    const symbolChars = "!@~#$%^&*()_-+=|;:,<.>?/";
    let password = "";
    let allowedChars = "";

    allowedChars += includeLowercase.checked ? lowercaseChars : "";
    allowedChars += includeUppercase.checked ? uppercaseChars : "";
    allowedChars += includeNumbers.checked ? numberChars : "";
    allowedChars += includeSymbols.checked ? symbolChars : "";

    if(allowedChars.length === 0) {
        result.textContent = "Please check at least one box before generating password";
    }
    else {
        for(let i = 0; i < passwordLength; i++) {
            const charIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[charIndex];
        }
    
        result.textContent = `${password}`;
    }
}

document.getElementById("generateBtn").addEventListener("click", generatePassword);