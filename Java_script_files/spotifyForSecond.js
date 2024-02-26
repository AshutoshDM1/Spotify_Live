let songName = document.querySelector('.songName');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');
let title = document.querySelector('.title');
let ArtistName = document.querySelector('.ArtistName');
let Song = songName.getAttribute("id");
let cover = document.querySelector(".cover");
let Artists = [] ;
let Time = 0;

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
let trackEndPoint ;
for ( let SongName in spotifyMusic) {
    if(SongName===Song) {
        trackEndPoint= spotifyMusic[SongName];
        console.log(SongName);
        console.log(trackEndPoint);
    }
}
console.log(Song);
const _getTrack = async () => {

    let result = await fetch(`https://api.spotify.com/v1/tracks/${trackEndPoint}`, {
    method: 'GET',
    headers: { 'Authorization' : 'Bearer ' + `${newToken}`}
    });
    const data = await result.json();
    console.log(data);
    let songPic = data.album.images[0].url;
    console.log(songPic);
    cover.style.backgroundImage ='url('+songPic+')';
    Time = data.duration_ms;
    Time = Time/1000/60;
    console.log(Time);
    let Artist = data.album['artists'];
    Artist.forEach(ele => {
        Artists.push(ele.name);
        ArtistName.innerText = `Song By ${Artists}`;
        console.log(Artists);
    });

}

async function getfinal() {
    await _getToken();
    await _getTrack();
    text3.innerText = `Duration - ${Time} Min`
}
getfinal();

title.innerText = `${Song}-Spotify`
text2.innerText = Song;

let player = document.querySelector('.player');
let play = document.querySelector('.play');
let loop = document.querySelector('.loop');
let songdiv = document.querySelector('.songdiv');

function playerPlay() {
    Essential_Audio.Play();
    player.innerHTML = '<i class="btn fa-solid fa-pause"></i>'
}
function playerStop() {
    Essential_Audio.Stop();
    player.innerHTML = '<i class="btn fa-solid fa-play"></i>'
}

let playerCount = 2;
function forplayer() {
    if(playerCount%2===0){
        playerPlay();
       
    }
    else {
        playerStop();
        
    }
    playerCount++;
}
function forloop() {
    Essential_Audio.Stop(0);
    playerPlay();
    
}
player.addEventListener('click', forplayer);
play.addEventListener('click', playerPlay);
loop.addEventListener('click', forloop);
