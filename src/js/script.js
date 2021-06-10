var closeBtn = document.getElementById('nav')
var openBtn = document.getElementById('openMenuBtn');
var item = document.querySelectorAll('.menu-i');

openBtn.onclick = openNav;
//closeBtn.onclick = closeNav;

var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

for (var i = 0; i < item.length; i++) {
    openPage('defaultOpen');
    // if(item[i].addEventListener('click')){
    //     if(item[i].classList.contains('insta')){
    //             item[i].addEventListener('click', () => {
    //             openPage('insta');
    //             })        
    //         } 
    // }

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
    else {
        item[i].addEventListener('click', () => {
            openPage('defaultOpen');
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
        openPage('defaultOpen');
    }
    

    closeNav();     
}

function openNav() {
    document.getElementById("nav").style.height = "100%";
}

function closeNav() {
    document.getElementById("nav").style.height = "0%";
}