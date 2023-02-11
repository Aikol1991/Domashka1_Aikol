const holderDisplay = document.querySelectorAll('.form-holder')

const login = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$&*";
const regExp1 = /[A-Za-z0-9]/g;

console.log(login.match(regExp1));

const password = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$&*";
const regExp2 = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/g;

console.log(password.match(regExp2));


let offset = 0;

function move() {
    document.querySelector('.block-1').style.left = offset + 'px';
    offset = offset + 6;
}

document.querySelector('.Move').onclick = move;