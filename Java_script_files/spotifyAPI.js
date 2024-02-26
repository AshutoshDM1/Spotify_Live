let music = document.querySelectorAll(".music");
let audio = document.querySelector(".audio");
let div1 = document.querySelector(".div1");


const clientId = '73461045a9784a4a906e35f9c1d5c7e2';
const clientSecret = '6e20a05d00894bd9808c96dcca58b62c';
let newToken;

async function _getToken(){
    const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    newToken = data.access_token;
    return ;
}

async function get1() {
    await _getToken();
    _getTrack();
}
get1();

let div_count = 0;

const _getTrack = async () => {
    
    console.log(newToken);
    for ( let SongName in spotifyMusic) {
        trackEndPoint = spotifyMusic[SongName];
        let result = await fetch(`https://api.spotify.com/v1/tracks/${trackEndPoint}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + `${newToken}`}
    });
    music[div_count].setAttribute('id',SongName);
    const data = await result.json();
    let songPic = data.album.images[0].url;
    music[div_count].style.backgroundImage ='url('+songPic+')';
    div_count++;
    }
}

music.forEach(div => {
    div.addEventListener('click',()=>{
        let IdChossen = div.getAttribute('id');
        console.log(IdChossen);
        for (let path in spotifyMusic){
            if(IdChossen===path){
                window.location.href = `${IdChossen}.html`;
                // window.location.href = `/File_Main/${IdChossen}.html`;
            }
        }
    });
});
