// Assignment code here
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialChars = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var buttonOn = document.getElementById("generate").disabled = true;
function buttonVld() {
  console.log(buttonOn);
  if (lengthcase > 7 && lengthcase < 129) {
    if( specialcase == true || lowercase == true || uppercase == true || numbercase == true){
      buttonOn = document.getElementById("generate").disabled = false;
    }
    else {
      buttonOn = document.getElementById("generate").disabled = true;
    }
  }
  else {
    buttonOn = document.getElementById("generate").disabled = true;
  }
}

var lcount = 0;
var lowercase = false;
var lowercaseCheck = document.querySelector("#lowercase");
lowercaseCheck.addEventListener("click", lowerclick);
function lowerclick() {
  lcount++;
  if (lcount % 2 !== 0) {
    lowercase = true;
  }
  else {
    lowercase = false;
  }
  buttonVld();
}

var ucount = 0;
var uppercase = false;
var uppercaseCheck = document.querySelector("#uppercase");
uppercaseCheck.addEventListener("click", upperclick);
function upperclick() {
  ucount++;
  if (ucount % 2 !== 0) {
    uppercase = true;
  }
  else {
    uppercase = false;
  }
  buttonVld();
}

var ncount = 0;
var numbercase = false;
var numberCheck = document.querySelector("#number");
numberCheck.addEventListener("click", numberclick);
function numberclick() {
  ncount++;
  if (ncount % 2 !== 0) {
    numbercase = true;
  }
  else {
    numbercase = false;
  }
  buttonVld();
}

var scount = 0;
var specialcase = false;
var specialCheck = document.querySelector("#characters");
specialCheck.addEventListener("click", specialclick);
function specialclick() {
  scount++;
  if (scount % 2 !== 0) {
    specialcase = true;
  }
  else {
    specialcase = false;
  }
  buttonVld();
}

var lengthcase = 0;
var lengthCheck = document.getElementById("length");
lengthCheck.addEventListener("keyup", function() {
  lengthcase = lengthCheck.value;
  buttonVld();
});

function generatePassword() {
var passwordCreate = [];
var charPool = [];

function randomizer(array) {
  var randomChar = Math.floor(Math.random() * array.length);
  return array[randomChar];
}

  if (lowercase == true) {
    charPool.concat(lowerCaseLetters);
    passwordCreate.push(randomizer(lowerCaseLetters));
  }

  if (uppercase == true) {
    charPool.concat(upperCaseLetters);
    passwordCreate.push(randomizer(upperCaseLetters));
  }
  
  if (numbercase == true) {
    charPool.concat(numbers);
    passwordCreate.push(randomizer(numbers));
  }
  
  if (numbercase == true) {
    charPool.concat(specialChars);
    passwordCreate.push(randomizer(specialChars));
  }

  for( var i = 0; i < lengthcase - passwordCreate.length; i++) {
    passwordCreate.push(randomizer(charPool));
  }
}

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Drop-down menu code here
var setCrtr = document.querySelector("#set-criteria");
var hidden = document.querySelector("#hidden");

setCrtr.addEventListener("click", dropdown);

function dropdown() {
  hidden = document.getElementById("hidden").style.display = "inline";
}