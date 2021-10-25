const lowerCase = document.getElementById("lowerCase");
const upperCase = document.getElementById("upperCase");
const symbols = document.getElementById("symbols");
const numbers = document.getElementById("numbers");
const passwordBtn = document.getElementById("passwordBtn");
const lenPassword = document.getElementById("len");
const passwordText = document.querySelector('.passwordText')

passwordBtn.addEventListener("click", function () {
  generatePassword()
});



const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
const SYMBOLS = "?!+-@_*ç";
const numbs = "1234567890";

function generatePassword() {
  const len = lenPassword.value;

  let password = "";
  for (let i = 0; i < len; i++) {
    const x = generatateX();
    password += x;
  }
  passwordText.innerHTML = password;

}
function generatateX() {
  const xs = [];
  if (lowerCase.checked) {
    xs.push(getLowerCase());
  }

  if (upperCase.checked) {
    xs.push(getUpperCase());
  }

  if (symbols.checked) {
    xs.push(getSymbol());
  }

  if (numbers.checked) {
    xs.push(getNumber());
  }

  if(xs === 0){
    return '';
  }
  return xs[Math.floor(Math.random()* xs.length)]
}

function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUpperCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}
function getSymbol() {
  return numbs[Math.floor(Math.random() * numbs.length)];
}
