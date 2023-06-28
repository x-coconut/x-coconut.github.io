//navigation pannel
const opennav = document.querySelector('.opennav')
opennav.addEventListener('click', () => {
    document.getElementById("mySidenav").style.width = "175px";
    document.getElementById("main").style.marginLeft = "175px";
    document.getElementById("opnbttn").style.display = "none";
})
const closenav = document.querySelector('.closenav')
closenav.addEventListener('click', () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("opnbttn").style.display = "inline";
})

function colour_theme() { //changes to correct css file
    var newtheme = document.getElementsByTagName('link')[0]; //[0] is guaranteed css link on each of my pages
    const currtheme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, '$1');

    if (currtheme == "dark") {
        newtheme.setAttribute('href', 'dark.css'); //changes css file 
    }
    else {
        newtheme.setAttribute('href', 'light.css'); //changes css file
    }
}

//logout button
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
    document.cookie = `login=no`;
    window.location.href = ('../dist/login.html');
})

//basket button
const basketButton = document.querySelector('.basket')
basketButton.addEventListener('click', () => {
    window.location.href = ('../dist/basket.html'); //redirects to basket page
})

//detects wheter a user is logged in or out
function checkLoggedIn(){
    const login = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (login != "yes") { //not logged in so redirect to login page
        window.location.href = ('../dist/login.html');    
    } 
};

function getCurrentEmail() {
    //getting email 
    curremail = 'guest@guest.com'

    return curremail
}

//checks if a char is a letter (used in pw validation)
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}

//checks if an email is actually formatted like an email address
function validateEmail(email) {
    var rules = /\S+@\S+\.\S+/;
    return rules.test(email);
}

function rankbutton(){ //changes the label on the rank button to hide/show and returns whether set to true or false

    let hiderank = localStorage.getItem('hiderank');
    //updates button to say correct thing

    if (hiderank != 'true') {
        document.getElementById("rankbtn").innerHTML = "hide rank";
    }
    else {
        document.getElementById("rankbtn").innerHTML = "show rank";
    }
    return hiderank
}

//update email
const updateEmailform = document.querySelector('.updateEmail')
updateEmailform.addEventListener('submit', (event) => {
    event.preventDefault();
    const newEmail = updateEmailform.newEmail.value;
    const password = updateEmailform.password.value;

    if (password == 'Password1'){ //if correct pwd
        if (validateEmail(newEmail) == true){ //if valid email
            document.getElementById("errmsgEmail").innerHTML = '<div style = "color:rgb(11, 241, 23);">email would be updated if this wasn\'t a demo</div>';
        }
        else{
            document.getElementById("errmsgEmail").innerHTML = '<div style = "color:red;">invalid email</div>';
        }
    }
    else{
        document.getElementById("errmsgEmail").innerHTML = '<div style = "color:red;">incorrect password</div>';
    }

    updateEmailform.reset();
});

//update password
const updatePwdform = document.querySelector('.updatePwd')
updatePwdform.addEventListener('submit', (event) => {
    event.preventDefault();
    const newpwd = updatePwdform.newPwd.value;
    const currpwd = updatePwdform.currPwd.value;

    //validate new pwd
    //check password meets min requirements
    let nonletters = 0;
    let i;
    for (i = 0; i < newpwd.length; i++) {
        if (isCharacterALetter(newpwd[i]) == false) {
            nonletters += 1;
        }
    }

    let pwdokay = true;

    if (currpwd != "Password1"){ //current password wrong
        pwdokay = false;
        document.getElementById("errmsgPwd").innerHTML = '<div style = "color:red;">current password is incorrect</div>';
    }
    if ((newpwd.length) < 8) { //too short
        pwdokay = false;
        document.getElementById("errmsgPwd").innerHTML = '<div style = "color:red;">new password must be at least 8 characters</div>';
    }
    else if (nonletters == 0) {//no numbers 
        pwdokay = false;
        document.getElementById("errmsgPwd").innerHTML = '<div style = "color:red;">new password must contain some numbers or symbols</div>';
    }
    if (pwdokay == true) {
        document.getElementById("errmsgPwd").innerHTML = '<div style = "color:rgb(11, 241, 23);">password would be updated if this wasn\'t a demo</div>';
        
    updatePwdform.reset();
}
});

//reset progress button
const progressButton = document.querySelector('.resetprg')
progressButton.addEventListener('click', () => {
    //triggers popup box to make them type confirmation
    document.getElementById("content").innerHTML = "this will reset all your progress to 0% and mark all challenges as incomplete <br><br> type yes to continue"
    document.getElementById("popup").style.display = "block";
    choice = "reset";
})

//delete account button
const deleteButton = document.querySelector('.dltacc')
deleteButton.addEventListener('click', () => {
    //triggers popup box to make them type confirmation
    document.getElementById("content").innerHTML = "this will permanently delete your account : " + getCurrentEmail() + "<p style='color:darkred'><strong>This feature will not delete the account in this demo version</strong></p><br><div id = 'errmsgdelete'></div><input type = 'password' placeholder='password' name='password' id = 'pwd'/><br><br> type yes to continue"
    document.getElementById("popup").style.display = "block";
    choice = "delete";
})

//submit button on popup checks user submitted 'yes'
const submitButton = document.querySelector('.submit')
submitButton.addEventListener('click', () => {
    //reset err message boxes to blank
    document.getElementById("badYes").innerHTML = "";

    var input = document.getElementById("confirmation").value;
    if (input == "yes") {
        if (choice == "reset") {
            //reset progress
            localStorage.setItem('challenge_1', false)
            localStorage.setItem('challenge_2', false)
            localStorage.setItem('challenge_3', false)
            localStorage.setItem('challenge_4', false)
            localStorage.setItem('challenge_5', false)
            localStorage.setItem('challenge_6', false)

            //clear input box and output message

            document.getElementById("deleteMessage").innerHTML = '<div style = "color:rgb(11, 241, 23); font-size:30px;">progress reset</div><br>';
            document.getElementById("popup").style.display = "none";
            document.getElementById("content").innerHTML = "";
            document.getElementById("badYes").innerHTML = "";

        }
        else if (choice == "delete") {
            document.getElementById("errmsgdelete").innerHTML = "";
            //delete account - login then delete account then the following should auto happen: logout and redirect to login page
            const pwd = document.getElementById("pwd").value;
            if (pwd == 'Password1') {
                document.getElementById("errmsgdelete").innerHTML = '<div style = "color:rgb(11, 241, 23); font-size:30px;">account would be deleted if this wasn\'t a demo</div><br>';
            }
            else {
                document.getElementById("errmsgdelete").innerHTML = '<div style = "color:red;">incorrect password</div>';
            }
        }
    }
    else {
        //didn't type yes correctly
        document.getElementById("badYes").innerHTML = '<div>you did not type "yes"</div><br>';
    }
    document.getElementById("confirmation").value = ""; // clear what user entered in input box
});

//closes popup if user hits cancel
const cancelButton = document.querySelector('.cancel')
cancelButton.addEventListener('click', () => {
    document.getElementById("content").innerHTML = "";
    document.getElementById("badYes").innerHTML = "";
    document.getElementById("popup").style.display = "none";
    document.getElementById("confirmation").value = "";
    document.getElementById("deleteMessage").innerHTML = ""; //removes confirmation message to avoid confusion
})

//when rank button pressed
const rankButtn = document.querySelector('.hiderank')
rankButtn.addEventListener('click', () => {
    hide = rankbutton() //work out if currently hidden or showing

        if (hide == 'true'){ //user want to show their rank now
            localStorage.setItem('hiderank', false)
            //output confirmation
            document.getElementById("deleteMessage").innerHTML = '<div style = "color:rgb(11, 241, 23); font-size:30px;">rank shown</div><br>';  
        }
        else{
            localStorage.setItem('hiderank', true)
            //output confirmation
            document.getElementById("deleteMessage").innerHTML = '<div style = "color:rgb(11, 241, 23); font-size:30px;">rank hidden</div><br>';
        } 
        rankbutton();//update button to display correct text
});

//when colour theme button pressed
const colourbttn = document.querySelector('.colourbtn')
colourbttn.addEventListener('click', () => {
    //update cookies
    let currtheme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (currtheme == "dark"){
        document.cookie = `theme=light`;
    }
    else{
        document.cookie = `theme=dark`;
    }
    colour_theme();
});



//triggered when page loads
checkLoggedIn();
colour_theme(); 
rankbutton();
var curremail = getCurrentEmail(); //get email to display at start (greyed out but is used - dont delete)
let choice = ""; // so confirmation popup buttons do correct thing