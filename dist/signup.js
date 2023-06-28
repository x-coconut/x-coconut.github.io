
//checks if a char is a letter (used in pw validation)
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}

//checks if an email is actually formatted like an email address
function validateEmail(email) {
    var rules = /\S+@\S+\.\S+/;
    return rules.test(email);
}

//signing up users
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    document.getElementById("errmsg").innerHTML = "";
    const email = signupForm.email.value
    var password = signupForm.password.value

    //check password meets min requirements
    let output = "";
    let nonletters = 0;
    let i;
    for (i = 0; i < password.length; i++) {
        if (isCharacterALetter(password[i]) == false) {
            nonletters += 1;
        }
    }

    //dealing with displaying error message

    if ((password.length) < 8) {
        output = output + "password must be at least 8 characters<br>";
    }
    if (nonletters == 0) {
        output = output + "password must contain some numbers or symbols<br>";
    }
    if (validateEmail(email) == false){
        output = output + "invalid email";
    }

    signupForm.reset();
    
    if (output == ""){
        document.getElementById("errmsg").innerHTML = "a user would have been created if this wasn't a demo";
    }
    else{
        document.getElementById("errmsg").innerHTML = output;
    }
})