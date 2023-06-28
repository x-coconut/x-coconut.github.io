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

//delays ad popup
function ad_time(){
    setTimeout(ad, 5000);//delay 5s
}

function ad() { //chooses ad and displays as popup
    let num = Math.floor(Math.random() * 3) + 1; //1 - 3 because we floor the number
    //first ad
    if (num == 1){
        document.getElementById("content").innerHTML = "<center><h1>special offer</h1><a href = '4.html' id = 'sale'><img src = 'images/monkey_sale.png' height = 300px><div>monkey</div></a><br>was £100, now only £19</center>"
        document.getElementById("popup").style.display = "block";
    }
    //second ad
    else if (num == 2){
        document.getElementById("content").innerHTML = "<center><h1>special offer</h1><a href = '16.html' id = 'sale'><img src = 'images/giraffe_sale.png' height = 300px><div>giraffe</div></a><br>was £120, now only £9</center>"
        document.getElementById("popup").style.display = "block";
    }
    //third ad
    else{
        document.getElementById("content").innerHTML = "<center><h1>special offer</h1><a href = '3.html' id = 'sale'><img src = 'images/elephant_sale.png' height = 300px><div>elephant</div></a><br>was £200, now only £49</center>"
        document.getElementById("popup").style.display = "block";
    }
}

const closeButton = document.querySelector('.close') //close button on ad
closeButton.addEventListener('click', () => {
    document.getElementById("content").innerHTML = "";
    document.getElementById("popup").style.display = "none";
})

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
        window.location.href = '../dist/login.html';   
    } 
};
  
//triggered when page loads
checkLoggedIn();
colour_theme(); 
ad_time();