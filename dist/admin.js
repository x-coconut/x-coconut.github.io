//checks if the user enters correct admin credentials

//when go button pressed
const loginForm = document.querySelector('.admin')
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); //stop the page from refreshing
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    if (username == "root" && password == ""){
        document.getElementById("errmsg").innerHTML = "flag{d0nT us3 DeF4uLt Cr3d5}";
    }
    else{
        document.getElementById("errmsg").innerHTML = "incorrect username or password";
    }
    loginForm.reset();
})