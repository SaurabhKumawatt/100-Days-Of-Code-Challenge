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
async function getSongs(folder) {
    currFolder = folder;
    // let a = await fetch("http://127.0.0.1:3000/Day%2062/spotify-clone/songs/")
    // let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/`)
    let a = await fetch(`/${folder}/`)
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
            songs.push(element.href.split(`/${folder}/`)[1])
        }

    }
    let songListUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    songListUL.innerHTML = ""
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
    // // Attach an event listener to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", function (element) {
            // let songName = e.querySelector(".info").firstElementChild.innerHTML
            // console.log(songName);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })
    });
    return songs
}
// play, pause music 
const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track
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
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let playlistCards = document.querySelector(".playlistCards")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-2)[0]
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json()
            playlistCards.innerHTML = playlistCards.innerHTML + `
            <div data-folder="${folder}" class="card">
                    <img src="/songs/${folder}/cover.jpg" alt="">
                    <h2>${response.title}</h2>
                    <p>${response.description}</p>
                    <div class="playbtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            class="injected-svg" data-src="/icons/play-circle-stroke-rounded.svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                            <circle cx="12" cy="12" r="10" stroke="#1ed760" stroke-width="1.5" fill="#1ed760"></circle>
                            <path fill="" black
                                d="M15.4531 12.3948C15.3016 13.0215 14.5857 13.4644 13.1539 14.3502C11.7697 15.2064 11.0777 15.6346 10.5199 15.4625C10.2893 15.3913 10.0793 15.2562 9.90982 15.07C9.5 14.6198 9.5 13.7465 9.5 12C9.5 10.2535 9.5 9.38018 9.90982 8.92995C10.0793 8.74381 10.2893 8.60868 10.5199 8.53753C11.0777 8.36544 11.7697 8.79357 13.1539 9.64983C14.5857 10.5356 15.3016 10.9785 15.4531 11.6052C15.5156 11.8639 15.5156 12.1361 15.4531 12.3948Z"
                                stroke="#000000" stroke-width="1.5" stroke-linejoin="round" fill="green"></path>
                        </svg>

                    </div>
                </div>`
        }

    }
    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async card => {
            console.log("songs list");
            songs = await getSongs(`songs/${card.currentTarget.dataset.folder}`)
            playMusic(songs[0])
        })
    })

}
// async function main() {
//   

//     

//    

//     // Add an event listener for hamburger
//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0"
//     })

//     // Add an event listener for close button
//     document.querySelector(".close").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-120%"
//     })

//     // Add an event listener to previous
//     previous.addEventListener("click", () => {
//         currentSong.pause()
//         console.log("Previous clicked")
//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
//         if ((index - 1) >= 0) {
//             playMusic(songs[index - 1])
//         }
//     })

//     // Add an event listener to next
//     next.addEventListener("click", () => {
//         currentSong.pause()
//         console.log("Next clicked")

//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
//         if ((index + 1) < songs.length) {
//             playMusic(songs[index + 1])
//         }
//     })

//     // Add an event to volume
//     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
//         console.log("Setting volume to", e.target.value, "/ 100")
//         currentSong.volume = parseInt(e.target.value) / 100
//         if (currentSong.volume >0){
//             document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
//         }
//     })

//     // Add event listener to mute the track
//     document.querySelector(".volume>img").addEventListener("click", e=>{ 
//         if(e.target.src.includes("volume.svg")){
//             e.target.src = e.target.src.replace("volume.svg", "mute.svg")
//             currentSong.volume = 0;
//             document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
//         }
//         else{
//             e.target.src = e.target.src.replace("mute.svg", "volume.svg")
//             currentSong.volume = .10;
//             document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
//         }

//     })





// }

async function main() {
    await getSongs("songs/Saurabh")
    // console.log(songs);
    playMusic(songs[0], true)
    await displayAlbums()

    // event to play, next and previous
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
    // Listen for timeupdate event
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
