document.addEventListener("DOMContentLoaded", function () {
    /* -------------------Moving elements when scrolling on Home Page--------------------------------- */
    const stars = document.getElementById('stars');
    const text = document.getElementById('text');
    const order_button = document.querySelector('.order_button');
    const header = document.querySelector('header');

    if (stars && text && order_button && header) {
        window.addEventListener('scroll', function () {
            let value = window.scrollY;
            stars.style.top = value * 1.1 + 'px';
            text.style.marginLeft = value * 5 + 'px';
            order_button.style.marginTop = value * 1.5 + 'px';
            header.style.top = value * 0.5 + 'px';
        });
    }

    /* ---------------The navigation bar becomes active or stops being active after clicking burger menu--------------------------- */
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar && nav) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    if (close && nav) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }

    /* ---------------User Page Switching from login to register form-------------------------------- */
    const login_form = document.getElementById("login");
    const register_form = document.getElementById("register");
    const button = document.getElementById("button");

    if (login_form && register_form && button) {
        window.register = function () {
            login_form.style.left = "-450px";
            register_form.style.left = "100px";
            button.style.left = "110px";
        }

        window.login = function () {
            login_form.style.left = "100px";
            register_form.style.left = "-400px";
            button.style.left = "0px";
        }
    }

    /* ---------------Cart Page remove items-------------------------------- */
    const removeItem_Buttons = document.getElementsByClassName('remove');

    for (let i = 0; i < removeItem_Buttons.length; i++) {
        let btn = removeItem_Buttons[i];
        btn.addEventListener('click', function (event) {
            let button_Clicked = event.target;
            button_Clicked.closest('.item').remove(); // safer than parentElement.parentElement
            updateTotalPrice();
        });
    }

    /* ---------------Cart Page update end price-------------------------------- */
    function updateTotalPrice() {
        const cartContainer = document.querySelector('.cart_items');
        const items = document.getElementsByClassName('item');
        let total = 0;

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let priceEl = item.querySelector('.price');
            let quantityEl = item.querySelector('.quantity_input');

            if (priceEl && quantityEl) {
                let price = parseFloat(priceEl.innerText.replace('$', ''));
                let quantity = parseInt(quantityEl.value);
                total += price * quantity;
            }
        }

        const subtotal = document.querySelector('.subtotal_price');
        const totalPrice = document.querySelector('.total_price');
        if (subtotal) subtotal.innerText = '$' + total.toFixed(2);
        if (totalPrice) totalPrice.innerText = '$' + total.toFixed(2);
    }
});
