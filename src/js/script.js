//menu..........................

let closeBtn = document.getElementById('nav')
let openBtn = document.getElementById('openMenuBtn');
let item = document.querySelectorAll('.menu-i');
let classes = ['insta','prices','service','we'];  //menu classes.....add class or remove in nav menu

openBtn.addEventListener('click', openNav);
closeBtn.onclick = closeNav;
   
let tabcontent = document.getElementsByClassName("tabcontent");

for (let i = 0; i < item.length; i++) {
    openPage('main');

    if(item[i].classList.contains('insta')){
        item[i].addEventListener('click', () => {
            openPage('insta');
        })        
    } 
    else if(item[i].classList.contains('prices')){
        item[i].addEventListener('click', () => {
            openPage('prices');
        })        
    } 
    else if(item[i].classList.contains('service')){
        item[i].addEventListener('click', () => {
            openPage('service');
        })        
    }
    else if(item[i].classList.contains('we')){
        item[i].addEventListener('click', () => {
            openPage('we');
        })        
    }  
    else {
        item[i].addEventListener('click', () => {
            openPage('main');
        })
    }       
}


function openPage(pageName) {
    let i, tabcontent, current;

    current = document.getElementById(pageName);
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    if(current){
        current.style.display = "block";
    }
    else{
        openPage('main');
    } 

    closeNav();     
}

function openNav() {
    document.getElementById("nav").style.height = "100%";
}

function closeNav() {
    document.getElementById("nav").style.height = "0%";
}

// плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const currentUrl = window.location.href;

// bxslider
$(document).ready(function(){
    $('.bxslider').bxSlider();
});

