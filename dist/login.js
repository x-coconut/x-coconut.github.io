//log users in
const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); //stop the page from refreshing
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    var output = "";

    if (email != "guest@guest.com") { //invalid login
        output = output + "that user doesn't exist<br>"
    }
    else if (password != "Password1") { //wrong password but right email
        output = output + "incorrect password<br>"
    }    

    loginForm.reset();
    document.getElementById("errmsg").innerHTML = output; //display err message

    if (email == "admin@guest.com;--") { //sql injection vulnerability
        document.getElementById("errmsg").innerHTML = "flag{d1s5aLloW sp3Ci4l cHar4cteR5}"
    }
    else if (output == ""){ //if not sql injection but did enter the correct login
        //set cookie to show logged in and send user to home page
        document.cookie = `login=yes`;
        window.location.href = ('../dist/home.html');
    }

});

//forget password button function - redirects to relevant page
const forgotpwd = document.querySelector('.forgotpasswordbtn')
forgotpwd.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = ('../dist/forgot.html');
});