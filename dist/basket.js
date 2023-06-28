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

function deletebasket(){ //empties the users basket
    localStorage.setItem('lion', 0);
    localStorage.setItem('elephant', 0);
    localStorage.setItem('monkey', 0);
    localStorage.setItem('flamingo', 0);
    localStorage.setItem('snake', 0);
    localStorage.setItem('frog', 0);
    localStorage.setItem('bison', 0);
    localStorage.setItem('iguana', 0);
    localStorage.setItem('polarbear', 0);
    localStorage.setItem('crocodile', 0);
    localStorage.setItem('rabbit', 0);
    localStorage.setItem('fox', 0);
    localStorage.setItem('turtle', 0);
    localStorage.setItem('koala', 0);
    localStorage.setItem('giraffe', 0);
    localStorage.setItem('octopus', 0);
}

function get_items() { //gets what items a user has in their basket from the database

    //get quantities of each animal
    let lion = localStorage.getItem('lion');
    let elephant = localStorage.getItem('elephant');
    let monkey = localStorage.getItem('monkey');
    let flamingo = localStorage.getItem('flamingo');
    let snake = localStorage.getItem('snake');
    let frog = localStorage.getItem('frog');
    let bison = localStorage.getItem('bison');
    let iguana = localStorage.getItem('iguana');
    let polarbear = localStorage.getItem('polarbear');
    let crocodile = localStorage.getItem('crocodile');
    let rabbit = localStorage.getItem('rabbit');
    let fox = localStorage.getItem('fox');
    let turtle = localStorage.getItem('turtle');
    let koala = localStorage.getItem('koala');
    let giraffe = localStorage.getItem('giraffe');
    let octopus = localStorage.getItem('octopus');
    let total = 0;

    //display in basket
    if (lion > 0) {
        document.getElementById("lion").innerHTML = `<image src="images/lion.png" class="basket_pic"><div>lion x${lion} : £${lion * 20}</div><form class = 'quant' id = 'lion'><label>quantity: </label><input type="number" id = 'quantity' value="${lion}" min="0" max="100"></form><br><br>`;
        total += lion * 20;
    }
    else {
        document.getElementById("lion").innerHTML = "";
    }
    if (elephant > 0) {
        document.getElementById("elephant").innerHTML = `<image src="images/elephant.png" class="basket_pic"><div>elephant x${elephant} : £${elephant * 49}</div><form class = 'quant' id = 'elephant'><label>quantity: </label><input type="number" id = 'quantity' value="${elephant}" min="0" max="100"></form><br><br>`;
        total = total + (elephant * 49);
    }
    else {
        document.getElementById("elephant").innerHTML = "";
    }
    if (monkey > 0) {
        document.getElementById("monkey").innerHTML = `<image src="images/monkey.png" class="basket_pic"><div>monkey x${monkey} : £${monkey * 19}</div><form class = 'quant' id = 'monkey'><label>quantity: </label><input type="number" id = 'quantity' value="${monkey}" min="0" max="100"></form><br><br>`;
        total = total + (monkey * 19);
    }
    else {
        document.getElementById("monkey").innerHTML = "";
    }
    if (flamingo > 0) {
        document.getElementById("flamingo").innerHTML = `<image src="images/flamingo.png" class="basket_pic"><div>flamingo x${flamingo} : £${flamingo * 30}</div><form class = 'quant' id = 'flamingo'><label>quantity: </label><input type="number" id = 'quantity' value="${flamingo}" min="0" max="100"></form><br><br>`;
        total = total + (flamingo * 30);
    }
    else {
        document.getElementById("flamingo").innerHTML = "";
    }
    if (snake > 0) {
        document.getElementById("snake").innerHTML = `<image src="images/snake.png" class="basket_pic"><div>snake x${snake} : £${snake * 12}</div><form class = 'quant' id = 'snake'><label>quantity: </label><input type="number" id = 'quantity' value="${snake}" min="0" max="100"></form><br><br>`;
        total = total + (snake * 12);
    }
    else {
        document.getElementById("snake").innerHTML = "";
    }
    if (frog > 0) {
        document.getElementById("frog").innerHTML = `<image src="images/frog.png" class="basket_pic"><div>frog x${frog} : £${frog * 9}</div><form class = 'quant' id = 'frog'><label>quantity: </label><input type="number" id = 'quantity' value="${frog}" min="0" max="100"></form><br><br>`;
        total = total + (frog * 9);
    }
    else {
        document.getElementById("frog").innerHTML = "";
    }
    if (bison > 0) {
        document.getElementById("bison").innerHTML = `<image src="images/bison.png" class="basket_pic"><div>bison x${bison} : £${bison * 60}</div><form class = 'quant' id = 'bison'><label>quantity: </label><input type="number" id = 'quantity' value="${bison}" min="0" max="100"></form><br><br>`;
        total = total + (bison * 60);
    }
    else {
        document.getElementById("bison").innerHTML = "";
    }
    if (iguana > 0) {
        document.getElementById("iguana").innerHTML = `<image src="images/iguana.png" class="basket_pic"><div>iguana x${iguana} : £${iguana * 100}</div><form class = 'quant' id = 'iguana'><label>quantity: </label><input type="number" id = 'quantity' value="${iguana}" min="0" max="100"></form><br><br>`;
        total = total + (iguana * 100);
    }
    else {
        document.getElementById("iguana").innerHTML = "";
    }
    if (polarbear > 0) {
        document.getElementById("polarbear").innerHTML = `<image src="images/polar_bear.png" class="basket_pic"><div>polar bear x${polarbear} : £${polarbear * 200}</div><form class = 'quant' id = 'polarbear'><label>quantity: </label><input type="number" id = 'quantity' value="${polarbear}" min="0" max="100"></form><br><br>`;
        total = total + (polarbear * 200);
    }
    else {
        document.getElementById("polarbear").innerHTML = "";
    }
    if (crocodile > 0) {
        document.getElementById("crocodile").innerHTML = `<image src="images/crocodile.png" class="basket_pic"><div>crocodile x${crocodile} : £${crocodile * 150}</div><form class = 'quant' id = 'crocodile'><label>quantity: </label><input type="number" id = 'quantity' value="${crocodile}" min="0" max="100"></form><br><br>`;
        total = total + (crocodile * 150);
    }
    else {
        document.getElementById("crocodile").innerHTML = "";
    }
    if (rabbit > 0) {
        document.getElementById("rabbit").innerHTML = `<image src="images/rabbit.png" class="basket_pic"><div>rabbit x${rabbit} : £${rabbit * 5}</div><form class = 'quant' id = 'rabbit'><label>quantity: </label><input type="number" id = 'quantity' value="${rabbit}" min="0" max="100"></form><br><br>`;
        total = total + (rabbit * 5);
    }
    else {
        document.getElementById("rabbit").innerHTML = "";
    }
    if (fox > 0) {
        document.getElementById("fox").innerHTML = `<image src="images/fox.png" class="basket_pic"><div>fox x${fox} : £${fox * 15}</div><form class = 'quant' id = 'fox'><label>quantity: </label><input type="number" id = 'quantity' value="${fox}" min="0" max="100"></form><br><br>`;
        total = total + (fox * 15);
    }
    else {
        document.getElementById("fox").innerHTML = "";
    }
    if (turtle > 0) {
        document.getElementById("turtle").innerHTML = `<image src="images/turtle.png" class="basket_pic"><div>turtle x${turtle} : £${turtle * 25}</div><form class = 'quant' id = 'turtle'><label>quantity: </label><input type="number" id = 'quantity' value="${turtle}" min="0" max="100"></form><br><br>`;
        total = total + (turtle * 25);
    }
    else {
        document.getElementById("turtle").innerHTML = "";
    }
    if (koala > 0) {
        document.getElementById("koala").innerHTML = `<image src="images/koala.png" class="basket_pic"><div>koala x${koala} : £${koala * 60}</div><form class = 'quant' id = 'koala'><label>quantity: </label><input type="number" id = 'quantity' value="${koala}" min="0" max="100"></form><br><br>`;
        total = total + (koala * 60);
    }
    else {
        document.getElementById("koala").innerHTML = "";
    }
    if (giraffe > 0) {
        document.getElementById("giraffe").innerHTML = `<image src="images/giraffe.png" class="basket_pic"><div>giraffe x${giraffe} : £${giraffe * 9}</div><form class = 'quant' id = 'giraffe'><label>quantity: </label><input type="number" id = 'quantity' value="${giraffe}" min="0" max="100"></form><br><br>`;
        total = total + (giraffe * 9);
    }
    else {
        document.getElementById("giraffe").innerHTML = "";
    }
    if (octopus > 0) {
        document.getElementById("octopus").innerHTML = `<image src="images/octopus.png" class="basket_pic"><div>octopus x${octopus} : £${octopus * 1}</div><form class = 'quant' id = 'octopus'><label>quantity: </label><input type="number" id = 'quantity' value="${octopus}" min="0" max="100"></form><br><br>`;
        total = total + (octopus * 1);
    }
    else {
        document.getElementById("octopus").innerHTML = "";
    }

    document.getElementById("total").innerHTML = "Total: £" + total;

    // Update the total in db
    localStorage.setItem('total', total);
}

//update quantity
document.addEventListener('submit', async (event) => { //listens for any submit - needed as forms added in inner html not from beginning
    if (event.target.classList.contains('quant')) { //if it has quant class then the code executes
        event.preventDefault();
        const formId = event.target.id; // get id of the submitted form ie the animal
        var quantity = parseInt(event.target.querySelector('input[type="number"]').value);// gets new quantity from form
        if (Number.isNaN(quantity) == true) { //so 0 put in db not NaN
            quantity = 0;
        }

        // change quantity in db
        localStorage.setItem(formId, quantity);

        get_items();
    }
});

//empty basket
const emptybasket = document.querySelector('.empty')
emptybasket.addEventListener('click', () => {
    deletebasket()
    get_items();
})

//buy button - clears basket and redirects to checkout page
const buybtn = document.querySelector('.buy')
buybtn.addEventListener('click', () => {

    deletebasket();//empty basket now items bought

    //get quantities of each animal
    let total = localStorage.getItem('total');

    //display popup to user
    document.getElementById("content").innerHTML = `<center>thank you for your order<br>your total was £${total}</center><br>`
    document.getElementById("popup").style.display = "block";
})


const closeButton = document.querySelector('.close') //close button on popup
closeButton.addEventListener('click', () => {
    document.getElementById("content").innerHTML = "";
    document.getElementById("popup").style.display = "none";
    get_items();
})

//logout button
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
    document.cookie = `login=no`;
    window.location.href = ('../dist/login.html');
})

//detects wheter a user is logged in or out
function checkLoggedIn(){
    const login = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (login != "yes") { //not logged in so redirect to login page
        window.location.href = ('../dist/login.html');    
    } 
};

//triggered when page loads
checkLoggedIn();
colour_theme();
get_items();


