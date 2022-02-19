const LoginForm = document.querySelector("#Login-form");
const LoginInput = document.querySelector("#Login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
  event.preventDefault();
  LoginForm.classList.add(HIDDEN_CLASSNAME);
  const username = LoginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;  
  greeting.classList.remove(HIDDEN_CLASSNAME);   
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if( savedUsername === null){
  LoginForm.classList.remove(HIDDEN_CLASSNAME);   // show the form
  LoginForm.addEventListener("submit", onLoginSubmit)
} else {
  paintGreetings(savedUsername);                             //show the greeting
}
