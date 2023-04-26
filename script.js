/* -------------------Moving elements when scrolling on Home Page--------------------------------- */
let stars = document.getElementById('stars');
let text = document.getElementById('text');
let order_button = document.getElementById('btn');
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
let value = window.scrollY
stars.style.top = value*1.1 + 'px';
text.style.marginLeft = value*5 + 'px';
          
order_button.style.marginTop = value*1.5 + 'px';
header.style.top = value*0.5 +'px';       
});

/* ---------------The navigation bar becomes active or stops being active after clicking burger menu--------------------------- */

let bar = document.getElementById('bar');
let close = document.getElementById('close');
let nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

/* ---------------User Page Switching from login to register form-------------------------------- */
let login_form = document.getElementById("login");
let register_form = document.getElementById("register");
let button = document.getElementById("button");

function register(){
    login_form.style.left="-450px";
    register_form.style.left="100px";
    button.style.left="110px";
}
function login(){
    login_form.style.left="100px";
    register_form.style.left="-400px";
    button.style.left="0px";
}


/* ---------------Cart Page remove items-------------------------------- */
let removeItem_Buttons = document.getElementsByClassName('remove');
console.log(removeItem_Buttons);
for(let i = 0; i < removeItem_Buttons.length; i++){
    let btn = removeItem_Buttons[i];
    btn.addEventListener('click', function(event){
        let button_Clicked = event.target;
        button_Clicked.parentElement.parentElement.remove();
        updateTotalPrice();
    })
}

/* ---------------Cart Page update end price-------------------------------- */
function updateTotalPrice() {
    let cartItemsArray = document.getElementsByClassName('cart_items')[0];
    let ItemsAmount = document.getElementsByClassName('item');
    let total = 0;
    for (let i = 0; i < ItemsAmount.length; i++) {
        let nth_Item = ItemsAmount[i]
        let price_ofItem = nth_Item.getElementsByClassName('price')[0];
        let quantity_ofItem = nth_Item.getElementsByClassName('quantity_input')[0];
        let price = parseFloat(price_ofItem.innerText.replace('$','') );
        let quantity = quantity_ofItem.value;
        total = total + (price * quantity);
        
    }
    document.getElementsByClassName('subtotal_price')[0].innerText = '$' + total;
    document.getElementsByClassName('total_price')[0].innerText = '$' + total;
}