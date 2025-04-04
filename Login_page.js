let main_form = document.querySelector('.main-form');
let greeting = document.querySelector('.greeting');
let sign_up = document.querySelector('.sign-up_form');
let greeting2 = document.querySelector('.greeting2');


window.addEventListener('load', () => {
    main_form.classList.add('show');
    greeting.classList.add('show');
});


let a = document.querySelector('.main-form .form h3 a');
let a2 = document.querySelector('.sign-up_form .form2 .login_redirect a');
function remove() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();  // Ensure the promise resolves after the timeout
        }, 800);
    });
}

a.addEventListener('click', () => {
    greeting.style.animation = "closing 1.5s ease 0s 1 normal";
    main_form.style.animation = "closing 1.5s ease 0s 1 normal";

    remove().then(() => {

        setTimeout(() => {
            main_form.classList.remove('show');
            greeting.classList.remove('show');
            sign_up.classList.add('show');
            greeting2.classList.add('show');
        }, 100);


        main_form.style.display = "none";
        greeting.style.display = "none";
        sign_up.style.animation="";
        greeting2.style.animation="";
        sign_up.style.display = "flex";
        greeting2.style.display = "block";
    });
});


a2.addEventListener('click', () => {
    sign_up.style.animation = "closing 1.5s ease 0s 1 normal";
    greeting2.style.animation = "closing 1.5s ease 0s 1 normal";

    remove().then(() => {
        sign_up.style.display = "none";
        greeting2.style.display = "none";
        main_form.style.animation="";
        greeting.style.animation="";
        main_form.style.display = "grid";
        greeting.style.display = "block";
        setTimeout(() => {
            sign_up.classList.remove('show');
            greeting2.classList.remove('show');
            main_form.classList.add('show');
            greeting.classList.add('show');
        }, 100);
    });
});
