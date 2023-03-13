const nav = document.querySelector('.nav__items');
const navToggleBtn = document.querySelector('.nav__toggle');
const navHeader = document.querySelector('.header-nav-section');
const mainHeader = document.querySelector('.intro-section');
const header = document.querySelector('header')
const links = document.querySelectorAll('.link')

let openedNavBar = false
navToggleBtn.addEventListener('click', ()=>{
    if(!openedNavBar){
        nav.classList.add('open')
        openedNavBar = true
    }else{
        nav.classList.remove('open')
        openedNavBar = false
    }
})
links.forEach(link=>{
    link.addEventListener('click', ()=>{
        if(openedNavBar === true){
           
            nav.classList.remove('open')
            openedNavBar = false
        }
    })
})
window.onscroll = ()=>{
    if(window.scrollY > (header.clientHeight - 100)){
        navHeader.classList.add('sticky')
        mainHeader.style.marginTop = `${nav.clientHeight}px`
        if(openedNavBar === true){

            nav.classList.remove('open')
            openedNavBar = false
        }
    }else{
        mainHeader.style.marginTop = '0px'
        navHeader.classList.remove('sticky')

    }
}

const body = document.body;
const toggle = document.getElementById('tog')

toggle.addEventListener('click', ()=>{
    body.classList.toggle('dark')
})