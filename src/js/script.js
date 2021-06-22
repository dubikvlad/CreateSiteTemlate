var closeBtn = document.getElementById('nav')
var openBtn = document.getElementById('openMenuBtn');
var item = document.querySelectorAll('.menu-i');

openBtn.addEventListener('click', openNav);
closeBtn.onclick = closeNav;

var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

for (var i = 0; i < item.length; i++) {
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
    var i, tabcontent, current;

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

// bxslider
$(document).ready(function(){
    $('.bxslider').bxSlider();
});