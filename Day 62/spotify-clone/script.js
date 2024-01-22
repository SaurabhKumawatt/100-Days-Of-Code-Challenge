
let currentSong = new Audio();

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/Day%2062/spotify-clone/songs/")
    let response = await a.text()
    // console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    // console.log(as);
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }

    }

    return songs
}


const playMusic = (track, pause = false) => {
    currentSong.src = `/songs/` +  track
    // console.log(currentSong.baseURI = `/songs/` + track);
    // currentSong.play()
    if (!pause) {
        currentSong.play()
        play.src = "./assets/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function main() {
    
    let songs = await getSongs()
    // console.log(songs);
    playMusic(songs[0], true)

    let songListUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    // console.log(songListUL);
    for (const song of songs) {
        songListUL.innerHTML = songListUL.innerHTML + `<li>
        <img class="invert" width="34" src="./assets/music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20", " ")}</div>
            <div>Saurabh</div>
        </div>
        <div class="playnow">

            
            <img class="invert" src="./assets/play.svg" alt="">
        </div>
    </li>`
    }
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", function(el){
            let songName = e.querySelector(".info").firstElementChild.innerHTML
            console.log(songName);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })
    });

    play.addEventListener("click", function (){
        if(currentSong.paused){
            currentSong.play()
            play.src = "./assets/pause.svg"
        } 
        else{
            currentSong.pause()
            play.src = "./assets/play.svg"
        }
    })
    currentSong.addEventListener("timeupdate", function(){
        console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime/ currentSong.duration) * 99 + "%"
    })

}
main()

