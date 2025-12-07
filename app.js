// Q1
const btnColor = document.querySelector("#btnColor")
btnColor.addEventListener("click" , function () {
  document.body.style.backgroundColor = "lightblue";
})
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
const pass = document.querySelector("#password")

form.addEventListener("submit" , function (event) {
  event.preventDefault()
   alert(`Name: ${useName.value}\nEmail: ${email.value}\nPassword: ${pass.value}`);
  
})