// Q1
const btnColor = document.querySelector("#btnColor")
btnColor.addEventListener("click" , function () {
  document.body.style.backgroundColor = getRandomColor()
})
function getRandomColor(){
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}
// Q2
const darkMode = document.querySelector("#darkMode")
const lightMode = document.querySelector("#lightMode")

darkMode.addEventListener("click" , function () {
document.body.style.backgroundColor = "#223135";
document.style.color = "#ffffff";
})

lightMode.addEventListener("click" , function () {
  document.body.style.backgroundColor = "#ffffff"
  document.style.color = "#000000"
})

// Q3
const deleteElement = document.querySelector("#deleteElement")
deleteElement.addEventListener("click" , function () {
  deleteElement.style.display = 'none'
})
// Q4
const counter = document.querySelector("#counter")
const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")
let count = 0
increase.addEventListener("click" , function () {
  count++
  document.querySelector("#counter").innerText = count;
})
decrease.addEventListener("click" , function () {
  count--
  document.querySelector("#counter").innerText = count;
})
// Q5
const disableBtn = document.querySelector("#disable")
disableBtn.addEventListener("click" , function () {
  disableBtn.disabled = true;
})
// Q6
const textCharacters = document.querySelector("#textCharacters")
const countCharacters = document.querySelector("#countCharacters")

textCharacters.addEventListener("input" , function () {
  countCharacters.innerText = textCharacters.value.length
})
// Q7
const userPass = document.querySelector("#userPass");
const feedback = document.querySelector("#feedback")

userPass.addEventListener("input" , function () {
  
  if(userPass.value.length >= 8){
    feedback.innerText = "Strong"
    feedback.style.color = "green"
  }else{
    feedback.innerText = "Weak"
    feedback.style.color = "red"
  }
})
// Q8
const form = document.querySelector(".form")
const useName = document.querySelector("#name")
const email = document.querySelector("#email")

form.addEventListener("submit" , function (event) {
  event.preventDefault()
   alert(`Name: ${useName.value}\nEmail: ${email.value} `);
  
})
// Q9
const upperCase = document.querySelector("#upperCase")
const result = document.querySelector("#result")
upperCase.addEventListener("input" , function () {
  result.innerText = upperCase.value.toUpperCase()
})
// Q10
const bannedWords = ["spam" , "test"]
const detectForm = document.querySelector("#detectForm")
const message = document.querySelector("#message")

detectForm.addEventListener("submit" , function (event) {
  const userText = message.value
  for(let word of bannedWords){
  if(userText.includes(word)){
    event.preventDefault();
    alert("Forbidden word detected" + word);
    return
  }
}
  alert ("Form submitted sucessfuly")
})
// Q11
const country = document.querySelector("#countries")
const city = document.querySelector("#city")
const data = {
pakistan : ["Lahore" , "Quetta" , "Islamabad"],
india : ["Delhi" , "Hyderabad" , "Mumbai"],
japan : ["Tokyo" , "Kawasaki" , "Sapporo"],
america : ["New York" , "Los Angles" , "Chicago"]
};
country.addEventListener("change" , function () {
   city.innerHTML = "<option>Select City</option>";
  let selectedCountry = country.value
if (selectedCountry && data[selectedCountry]) {
  data[selectedCountry].forEach(function(cityName) {
    city.innerHTML += `<option value= "${cityName}">${cityName}</option>`;
  });
}
});
