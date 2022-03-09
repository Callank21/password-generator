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
var upperCaseChars = [
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

function generatePassword() {

}

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var count = 0;

var lowercase = false;
var lowercaseCheck = document.querySelector("#lowercase");
lowercaseCheck.addEventListener("click", lowerclick);
function lowerclick() {
  count++;
  if (count % 2 !== 0) {
    lowercase = true;
  }
  else {
    lowercase = false;
  }
}

var uppercase = false;
var uppercaseCheck = document.querySelector("#uppercase");
uppercaseCheck.addEventListener("click", upperclick);
function upperclick() {
  count++;
  if (count % 2 !== 0) {
    uppercase = true;
  }
  else {
    uppercase = false;
  }
}

var numbercase = false;
var numberCheck = document.querySelector("#number");
numberCheck.addEventListener("click", numberclick);
function numberclick() {
  count++;
  if (count % 2 !== 0) {
    numbercase = true;
  }
  else {
    numbercase = false;
  }
}

var specialcase = false;
var specialCheck = document.querySelector("#number");
specialCheck.addEventListener("click", specialclick);
function specialclick() {
  count++;
  if (count % 2 !== 0) {
    numbercase = true;
  }
  else {
    numbercase = false;
  }
}

var lengthcase = 0;
var lengthCheck = document.getElementById("length");
lengthCheck.addEventListener("keyup", function() {
  lengthcase = lengthCheck.value;
  console.log(lengthcase);
});

var buttonOn = document.getElementById("generate").disabled = true;
function buttonVld() {
  console.log("hi");
  if (lengthcase > 7 && lengthcase < 129) {
    if( specialcase == true || lowercase == true || uppercase == true || numbercase == true){
      buttonOn.disabled = false;
    }
  }
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