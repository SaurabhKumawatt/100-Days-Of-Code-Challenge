
let currentSong = new Audio();
let currFolder;
let songs;

// convert second into minutes second
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

// get songs from folder
async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/Day%2062/spotify-clone/songs/")
    let response = await a.text()
    // console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    // console.log(as);
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }

    }
    return songs
}

// play, pause music 
const playMusic = (track, pause = false) => {
    currentSong.src = `/songs/` + track
    // console.log(currentSong.baseURI = `/songs/` + track);
    // currentSong.play()
    if (!pause) {
        currentSong.play()
        play.src = "./assets/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

// diplay albums
async function displayAlbums() {
    console.log("displayAlbums");
    let a = await fetch(`/songs/`)
    let response = a.text();
    console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let playlistCards = document.querySelector(".playlistCards")
    let array = Array.from(anchors)
        
}

async function main() {
    songs = await getSongs()
    // console.log(songs);
    playMusic(songs[0], true)

    await displayAlbums()

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
        e.addEventListener("click", function (el) {
            let songName = e.querySelector(".info").firstElementChild.innerHTML
            console.log(songName);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })
    });

    play.addEventListener("click", function () {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "./assets/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "./assets/play.svg"
        }
    })
    currentSong.addEventListener("timeupdate", function () {
        console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 99 + "%"

    })
    let seekbar = document.querySelector(".seekbar")
    seekbar.addEventListener("click", function (e) {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })
    // event on next button
    next.addEventListener("click", function () {
        currentSong.pause();
        // console.log("next clicked");
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        // console.log(index);
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })
    // event on previous button
    previous.addEventListener("click", function () {
        currentSong.pause();
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        // console.log(index);
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }

    })
    // humburger click event
    let humburger = document.querySelector(".humburger")
    humburger.addEventListener("click", function (e) {
        // console.log("clicked");
        document.querySelector(".left").style.left = "0%"
    })
    // event on close button 
    let closeBtn = document.querySelector(".close-btn")
    closeBtn.addEventListener("click", function () {
        document.querySelector(".left").style.left = "-100%"
    })



    // event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value, "/ 100")
        currentSong.volume = parseInt(e.target.value) / 100
        if (currentSong.volume > 0) {
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
            // console.log(document.querySelector(".volume>img").src);
            // console.log(document.querySelector(".volume>img").src.replace("volume.svg", "mute.svg"));
        }
    })

    // event listener to mute the track
    document.querySelector(".volume>img").addEventListener("click", e => {
        if (e.target.src.includes("volume.svg")) {
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            currentSong.volume = 0;
            console.log();
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else {
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }

    })
}
main()
