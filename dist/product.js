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

function calc_review(rating){ //works out mean star rating and displays correct image
    //calculate review average 
    number_of_reviews = number_of_reviews + 1;
    review_total = review_total + parseInt(rating);
    var average = (parseInt(review_total/number_of_reviews)).toString(); //calculates mean review score

    //add correct pic to page
    var starImg = 'images' + `/${average}.png`; 
    var newreview = '<img src = "' + `${starImg}">`;
    document.getElementById("starpic").innerHTML = newreview;
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

//addtobasket button
const addbasketButton = document.querySelector('#addbskt')
addbasketButton.addEventListener('click', () => {

    var animal = document.getElementById("message").innerHTML;//works out what animal page is for
    if (animal == "polar bear"){ animal = "polarbear"}; //removes space as no space in db

    const quantity = localStorage.getItem(animal); //checks whats already in basket
    if (quantity == null || quantity < 0){ //if not in basket already or someone set it negative
        localStorage.setItem(animal, 1);
        document.getElementById("errmsg").innerHTML = "added to basket"
    }
    else if (quantity < 100) { //if not too many in basket
        localStorage.setItem(animal, parseInt(quantity) + 1);
        document.getElementById("errmsg").innerHTML = "added to basket"
    }
    else{
        document.getElementById("errmsg").innerHTML = "<span style='color:red;'>too many in basket</span>"
    }
});

//detects wheter a user is logged in or out
function checkLoggedIn(){
    const login = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (login != "yes") { //not logged in so redirect to login page
        window.location.href = ('../dist/login.html');    
    } 
}; 

//submit reviews
const review = document.querySelector('.leavereview')
review.addEventListener('submit', (event) => {
    const newreview = review.review.value;
    const rating = review.starrate.value.split('.')[0]; //split to stop entries of 4.00 breaking it

    event.preventDefault(); //stop the page from refreshing

    //gets correct star image
    var newrvwslot = document.getElementById("newreview"); 
    var starImg = 'images' + `/${rating}.png`;
    
    var newhtml = '<br>' + '<img src = "' + `${starImg}" id = "smallstrpc"><br>` + newreview + '<br>';
    newrvwslot.innerHTML += newhtml;
    review.reset();
    calc_review(rating);
});

//triggered when page loads
checkLoggedIn();
colour_theme(); 
let review_total = parseInt(document.getElementById("total_reviews").innerHTML);// sum of first 3 reviews greyed out but is used
let number_of_reviews = 2; //as function adds one when called
calc_review(0);
