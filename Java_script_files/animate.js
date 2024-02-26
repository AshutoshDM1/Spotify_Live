let side_nav = document.querySelector(".side-nav");
let side_nav_2 = document.querySelector(".side-nav-2");
let nav_logo = document.querySelector(".nav-logo");
let side_nav_3 = document.querySelector(".side-nav-3");
let bodymain = document.querySelector(".bodymain");
let spotify_logo = document.querySelector(".spotify-logo");
let home_logo = document.querySelectorAll(".home-logo");
let home_text = document.querySelectorAll(".home-text");



nav_logo.style.backgroundImage = 'url("/Java_script_files/nav_logos/spotifylogogif-ezgif.com-crop.gif")';

function changeBackgroundImage(newImageUrl) {
    nav_logo.style.backgroundImage = 'url(' + newImageUrl + ')';
}
setTimeout(function() {
    changeBackgroundImage('/Java_script_files/nav_logos/spotify_logo_cut.gif');
}, 4199); 

function nav_logo_Click() {
    nav_logo.style.backgroundImage = 'url("/Java_script_files/nav_logos/spotifylogogif-ezgif.com-crop.gif")';
    function changeBackgroundImage1(newImageUrl) {
        nav_logo.style.backgroundImage = 'url(' + newImageUrl + ')';
    }
    
    setTimeout(function() {
        changeBackgroundImage1('/Java_script_files/nav_logos/spotify_logo_cut.gif');
    }, 4199); 
}

nav_logo.addEventListener("click",nav_logo_Click )

let timeID;
let eventhandler = true;
async function scaleSideNav() {

    if (eventhandler === true){
        let scaleValue = 4;
        side_nav.style.transform = 'scaleX(' + scaleValue + ')';
        console.log('1');
        timeID =  setTimeout(sacleIt, 180 );
    }
    eventhandler = false;
}

function sacleIt() {
    console.log("print scale");
    side_nav_3.style.visibility = 'visible';
    console.log(timeID);
    animateTexts();
}
function deScaleSideNav() {
    let scaleValue = 1;
    side_nav.style.transform = 'scaleX(' + scaleValue + ')';
    side_nav_3.style.visibility = 'hidden';
    console.log("print descale");
    console.log(timeID);
    clearTimeout(timeID);
    animateTextsRemove();
    eventhandler = true;
    
}

function bodyOver(){
    side_nav_3.style.visibility = 'hidden';
    console.log("print descale");
    clearTimeout(timeID);
}
side_nav_2.addEventListener("mouseover" , scaleSideNav );
side_nav_2.addEventListener("mouseleave" , deScaleSideNav );


function setbob(){
    spotify_logo.classList.add("animate__animated","animate__rollIn");
}
function removebob(){
    spotify_logo.classList.remove("animate__animated","animate__rollIn");
}
setbob();


function animateLogos () {
    home_logo.forEach(logo => {
        logo.classList.add("animate__animated","animate__bounceInLeft")
    })
}
function animateTexts() {
    home_text.forEach(text => {
        text.classList.add("animate__animated","animate__bounceInLeft")
    })
}
function animateTextsRemove() {
    home_text.forEach(text => {
        text.classList.remove("animate__animated","animate__bounceInLeft")
    })
}

function musicpop() {
    music.forEach(div => {
        div.classList.add("animate__animated","animate__backInUp")
    })
}
function musicpopRemove() {
    music.forEach(div => {
        div.classList.remove("animate__animated","animate__backInUp")
    })
}
setTimeout( musicpopRemove,1000);
setTimeout( removebob,1000);
animateLogos();
musicpop();


let musicover = true ;
music.forEach(div => {
    div.addEventListener("mouseover" , animateMusicOver );
    div.addEventListener("mouseleave" , animateMusicOverRemove );
    function animateMusicOver() {
        if(musicover === true) {
            div.classList.add("animate__animated","animate__headShake")
        }
        musicover = false;
    }
    function animateMusicOverRemove() {
        div.classList.remove("animate__animated","animate__headShake");
        musicover = true;
    }
})

function bodylock() {
    bodymain.style.pointerEvents = 'none';
}
function bodyunlock() {
    bodymain.style.pointerEvents = 'all';
    console.log("use it as you want")
}

bodylock ();
setTimeout(bodyunlock, 1400);
