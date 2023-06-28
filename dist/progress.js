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

function calculate_rank() { //calculates a users rank compared to everyone else and displays it
    let rank = 1; //theres only one user in the demo
    //displays rank if user has not disabled it
    if (localStorage.getItem('hiderank') != 'true'){
        document.getElementById("rank").innerHTML = "current rank: " + rank + " (theres only 1 user in the demo)";
    }
}

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

//detects wheter a user is logged in or out
function checkLoggedIn(){
    const login = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (login != "yes") { //not logged in so redirect to login page
        window.location.href = ('../dist/login.html');    
    } 
};

function update_prcnt_rnk() { //displays the users % using the db
    prcnt = find_percentage()
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() { //increases bar width and label of % up to the users current completion
        if (width >= prcnt) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = '<strong>' + width * 1 + '%' + '</strong>';
        }
    }
    calculate_rank()
}

function find_percentage() { //works out what % of challenges a user has completed
    const num_of_challenges = 6;
    let total_complete = 0;

    // sees which challenges a user has completed and puts ticks
    if (localStorage.getItem('challenge_1') == 'true') {
        total_complete++;
        //add tickbox
        document.getElementById("tick_1").innerHTML = "hidden page<img src = 'images/tick.png' style = 'width:30px; height:30px;vertical-align:middle;'>";
    }
    if (localStorage.getItem('challenge_2') == 'true') {
        total_complete++;
        //add tickbox
        document.getElementById("tick_2").innerHTML = "robots<img src = 'images/tick.png' style = 'width:30px; height:30px;vertical-align:middle;'>";
    }
    if (localStorage.getItem('challenge_3') == 'true') {
        total_complete++;
        //add tickbox
        document.getElementById("tick_3").innerHTML = "admin page<img src = 'images/tick.png' style = 'width:30px; height:30px;vertical-align:middle;'>";
    }
    if (localStorage.getItem('challenge_4') == 'true') {
        total_complete++;
        //add tickbox
        document.getElementById("tick_4").innerHTML = "SQL login <img src = 'images/tick.png' style = 'width:30px; height:30px;vertical-align:middle;'>";
    }
    if (localStorage.getItem('challenge_5') == 'true') {
        total_complete++;
        //add tickbox
        document.getElementById("tick_5").innerHTML = "XSS <img src = 'images/tick.png' style = 'width:30px; height:30px;vertical-align:middle;'>";
    }
    if (localStorage.getItem('challenge_6') == 'true') {
        total_complete++;
        //add tickbox
        document.getElementById("tick_6").innerHTML = "comments <img src = 'images/tick.png' style = 'width:30px; height:30px;vertical-align:middle;'>";
    }

    var output = (total_complete / num_of_challenges) * 100;
    return output;
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

//submit flag button
const enterflg = document.querySelector('.enterflg')
enterflg.addEventListener('submit', (event) => {
    const flag = enterflg.enterflg.value;
    event.preventDefault(); //stop the page from refreshing

    //update database to corresponding flag
    if (flag == "flag{d0n't U5e IncR3mEntAL URLs}"){
        document.getElementById("feedback").innerHTML ='<div style = "color:rgb(11, 241, 23)">correct</div>';
        //update the challenge as complete
        localStorage.setItem('challenge_1', true)
        update_prcnt_rnk()
    }
    else if (flag == "flag{4lwAy5_ch3cK_R0boTs}"){
        document.getElementById("feedback").innerHTML ='<div style = "color:rgb(11, 241, 23)">correct</div>';
        //update the challenge as complete
        localStorage.setItem('challenge_2', true)
        update_prcnt_rnk()
    }
    else if (flag == "flag{d0nT us3 DeF4uLt Cr3d5}"){
        document.getElementById("feedback").innerHTML ='<div style = "color:rgb(11, 241, 23)">correct</div>';
        //update the challenge as complete
        localStorage.setItem('challenge_3', true)
        update_prcnt_rnk()
    }
    else if (flag == "flag{d1s5aLloW sp3Ci4l cHar4cteR5}"){
        document.getElementById("feedback").innerHTML ='<div style = "color:rgb(11, 241, 23)">correct</div>';
        //update the challenge as complete
        localStorage.setItem('challenge_4', true)
        update_prcnt_rnk()
    }
    else if (flag == "flag{ch4cK u53R 1nPut5}"){
        document.getElementById("feedback").innerHTML ='<div style = "color:rgb(11, 241, 23)">correct</div>';
        //update the challenge as complete
        localStorage.setItem('challenge_5', true)
        update_prcnt_rnk()
    }
    else if (flag == "flag{ch4cK c0MmenT5}"){
        document.getElementById("feedback").innerHTML ='<div style = "color:rgb(11, 241, 23)">correct</div>';
        //update the challenge as complete
        localStorage.setItem('challenge_6', true)
        update_prcnt_rnk()
    }
    else{
        document.getElementById("feedback").innerHTML = '<div style = "color:red;">incorrect flag</div>';
    }
    enterflg.reset();
});


//triggered when page loads
checkLoggedIn();
colour_theme(); 
update_prcnt_rnk(); //runs when page opened to calc rank and % to display to start with