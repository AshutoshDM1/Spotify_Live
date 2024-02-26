let playDiv = document.querySelector(".playDiv");
let songContainer = document.querySelector(".songContainer");
let playerdiv = document.querySelector(".playerdiv");

function aniPlay() {
    playDiv.classList.add("animate__animated","animate__zoomInUp");
    songContainer.classList.add("animate__animated","animate__fadeInLeft");
    playerdiv.classList.add("animate__animated","animate__zoomInUp");
}
function aniPlayRemove() {
    playDiv.classList.remove("animate__animated","animate__backInLeft");
    songContainer.classList.remove("animate__animated","animate__fadeInLeft");
    playerdiv.classList.remove("animate__animated","animate__zoomInUp");
}

aniPlay();
setTimeout (aniPlayRemove ,1000);

let framecover = true ;

cover.addEventListener("mouseover" , animateframecover );
cover.addEventListener("mouseleave" , animateframecoverRemove );
function animateframecover() {
    if(framecover === true) {
        cover.classList.add("animate__animated","animate__headShake")
    }
    framecover = false;
}
function animateframecoverRemove() {
    cover.classList.remove("animate__animated","animate__headShake");
    framecover = true;
}

let framecover1 = true ;
spotify_logo.addEventListener("mouseover" , animateframecover2 );
spotify_logo.addEventListener("mouseleave" , animateframecoverRemove2 );
function animateframecover2() {
    if(framecover1 === true) {
        spotify_logo.classList.add("animate__animated","animate__headShake")
    }
    framecover1 = false;
}
function animateframecoverRemove2() {
    spotify_logo.classList.remove("animate__animated","animate__headShake");
    framecover1 = true;
}