const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const NumberSet = "1234567890"
const symbolSet = "!@#$%^&*()_+"


// selectors 
const passBox = document.getElementById("pass-box")
const totalChr = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numbersInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")
// selectors closed 

const getRandomData = (DataSet) =>{
  return DataSet[Math.floor(Math.random() * DataSet.length)]
}

const generatePassword = (password = "") =>{
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numbersInput.checked) {
    password += getRandomData(NumberSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length < totalChr.value) {
    return generatePassword(password);
  }
  passBox.innerText = truncateString(password,totalChr.value);
}
generatePassword();

document.getElementById("btn").addEventListener(
  "click",
  function () {
    generatePassword();
  }
)

function truncateString(str, num) {
  if (str.length > num) {
      let subStr = str.substring(0, num);
      return subStr;
  } else {
      return str;
  }
}