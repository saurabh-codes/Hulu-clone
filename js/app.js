// console.log("Hello World!");

const login = document.getElementById("login-button");

const loginForm = document.getElementById("login-from-body");
// console.log(loginForm);

const closeBtn = document.getElementById("closeBtn");
// console.log(closeBtn);


// const opennMenu = () => (login.style.display = "block");
const opennMenu = () => {
    console.log("Clicked!");
    loginForm.style.display = "block";
}

const closeMenu = () => {
    console.log("Clicked close Button");
    loginForm.style.display = "none";
}

login.addEventListener("click", opennMenu);
loginForm.addEventListener("click", closeMenu);