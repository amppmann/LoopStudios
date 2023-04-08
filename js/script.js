
const btn = document.getElementById("menu-button");


const menu = document.getElementById("menu");

btn.addEventListener("click", toggleNav);


function toggleNav() {

    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}