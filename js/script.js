// All DOM Selection
const menu = document.getElementById('hamburger');
const navbar = document.querySelector('.nav-navbar');
const header = document.querySelector('.navbar');
const sb = document.querySelector('.portfolio select');
const dPage = document.getElementById('default');
const wdPage = document.getElementById('web-designer');
const pPage = document.getElementById('penerjemah');
const vePage = document.getElementById('video-editor');
const pePage = document.getElementById('penulis')
const btnTampilkan = document.getElementById('but-bidang');

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

btnTampilkan.addEventListener('click', function(){
    if(sb[0].selected){
        dPage.style.display ='block';
        wdPage.style.display='none';
        pPage.style.display='none'
        vePage.style.display='none'
        pePage.style.display='none'
    }else if(sb[1].selected){
        wdPage.style.display='flex';
        dPage.style.display='none';
        pPage.style.display='none'
        vePage.style.display='none'
        pePage.style.display='none'
    }else if(sb[2].selected){
        wdPage.style.display='none';
        dPage.style.display='none';
        pPage.style.display='flex'
        vePage.style.display='none'
        pePage.style.display='none'
    }else if(sb[3].selected){
        wdPage.style.display='none';
        dPage.style.display='none';
        pPage.style.display='none'
        vePage.style.display='flex'
        pePage.style.display='none'
    }else if(sb[4].selected){
        wdPage.style.display='none';
        dPage.style.display='none';
        pPage.style.display='none'
        vePage.style.display='none'
        pePage.style.display='flex'
    }
})