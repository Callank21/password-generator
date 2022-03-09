// Assignment code here
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //number index
var lowerCaseLetters = [ //lower case index
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
var upperCaseLetters = [ //uppercase index
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
var specialChars = [ //special characters index
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

var buttonOn = document.getElementById("generate").disabled = true; //generate password button is default disabled
function buttonVld() { //function checking requirements are met for inputs
  console.log(buttonOn);
  if (lengthcase > 7 && lengthcase < 129) {
    if( specialcase == true || lowercase == true || uppercase == true || numbercase == true){
      buttonOn = document.getElementById("generate").disabled = false; //if password length is within the range of 8 to 128 & at least one criteria equals true, then enable the button
    }
    else {
      buttonOn = document.getElementById("generate").disabled = true;
    }
  }
  else {
    buttonOn = document.getElementById("generate").disabled = true;
  }
}

var lcount = 0; //indvidual counter for each checkbox click
var lowercase = false; // checkbox starts unchecked
var lowercaseCheck = document.querySelector("#lowercase"); // connects checkbox 'lowercase' to variable lowerCaseCheck
lowercaseCheck.addEventListener("click", lowerclick);
function lowerclick() { // if lowercaseCheck is clicked then add one to the checkbox counter, if odd then true if even then false
  lcount++;
  if (lcount % 2 !== 0) {
    lowercase = true;
  }
  else {
    lowercase = false;
  }
  buttonVld(); //calls button validation after each button click
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

var lengthcase = 0; // length input starts at 0
var lengthCheck = document.getElementById("length"); // connects the "length" input to variable length check
lengthCheck.addEventListener("keyup", function() {
  lengthcase = lengthCheck.value; // take the value from the "length" input and inputs it into the lengthcase variable
  buttonVld(); // calls button validation
});

function generatePassword() {
  var passwordCreate = []; // create empty array for password to be assembled in
  var charPool = []; // create general array to connect all the character indexes above within
  
  function randomizer(array) { // randomizer to get random outputs from
    var randomChar = Math.floor(Math.random() * array.length);
    return array[randomChar];
  }
  
    if (lowercase == true) { // if lowercase was checked above, then insert one lowercase value into password array and take in the character index for that category into charPool index
      charPool = charPool.concat(lowerCaseLetters);
      passwordCreate.push(randomizer(lowerCaseLetters));
    }
  
    if (uppercase == true) {
      charPool = charPool.concat(upperCaseLetters);
      passwordCreate.push(randomizer(upperCaseLetters));
    }
    
    if (numbercase == true) {
      charPool = charPool.concat(numbers);
      passwordCreate.push(randomizer(numbers));
    }
    
    if (numbercase == true) {
      charPool = charPool.concat(specialChars);
      passwordCreate.push(randomizer(specialChars));
    }
  
    for(var i = lengthcase; passwordCreate.length <= i; passwordCreate.push(randomizer(charPool))) { // if the length of the password is less than the length of the desired length input, then add another random index from charPool into the password
      if (passwordCreate.length == lengthcase) { // when the password length equals the desire password length, then return the value 
        return passwordCreate.toString().replaceAll(",",""); // converts value to a string, toString() function put "," between each index in the string, so .replaceAll(",") removes them
      }
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
var setCrtr = document.querySelector("#set-criteria"); //connects the button with variable setCrtr
var hidden = document.querySelector("#hidden"); // connects the div has the value of 'hidden' for display to variable hidden

setCrtr.addEventListener("click", dropdown);

function dropdown() { // when the set-criteria button is hit, then the display value display within the CSS id hidden is changed to "inline" which reveals the dropdown
  hidden = document.getElementById("hidden").style.display = "inline";
}