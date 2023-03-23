// All DOM Selection
const menu = document.getElementById('hamburger');
const navbar = document.querySelector('.nav-navbar');
const header = document.querySelector('.navbar');

//Navbar akan muncul ketika tombol menu ditekan
menu.onclick = function(){
    navbar.classList.toggle('active-navbar');
    menu.classList.toggle('menu-active');
}

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbar.contains(e.target)){
        navbar.classList.remove('active-navbar');
        menu.classList.remove('menu-active');
    }
})