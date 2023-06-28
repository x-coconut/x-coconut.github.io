function redirect(){//sends user back to login page
    window.location.href = ('../dist/login.html');
}


//send pwd reset email in
const forgotForm = document.querySelector('.forgotpwd')
forgotForm.addEventListener('submit', (event) => {
    event.preventDefault(); //stop the page from refreshing
    const email = forgotForm.email.value;

    if (email == "guest@guest.com" || email == "admin@guest.com") {
        document.getElementById("errmsg").innerHTML = "<p style = 'color:green';>email would be sent if this wasn't a demo</p>"
        setTimeout(redirect, 5000);//delay 5s
    }
    else {
        document.getElementById("errmsg").innerHTML = "that user doesn't exist"
    }
    
    forgotForm.reset();
});
