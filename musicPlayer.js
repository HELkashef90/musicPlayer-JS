var btnPlay = document.getElementById("play");
var btnRepeat = document.getElementById("repeat");
var btnShuffle = document.getElementById("shuffle");
var audio = document.getElementById("audio");
var playList = document.getElementById("playList");
var songs;
var songsArr = [];
var currSongsArr = [];
var j = 0;
var repeatFlage = false;
var shuffleFlage = false;

songs = playList.children
console.log(songs)
for (var i = 0; i < songs.length; i++) {
    songsArr[i] = songs[i].children[0].innerText;
    // console.log(songs[i].children[0])
}
// console.log(songsArr[0])
for (var i = 0; i < songsArr.length; i++) {
    songs[i].children[0].addEventListener("click", function (ev) {
        audio.setAttribute("src", "music/" + ev.target.innerText + ".mp3");
        audio.play();
    })
}

currSongsArr = copyArr(songsArr);
// console.log(currSongsArr)

btnRepeat.addEventListener("click", repeat);
btnPlay.addEventListener("click", function () {
    audio.play();
})
btnShuffle.addEventListener("click", shuffle);

function shuffle() {
    if (shuffleFlage == false) {
        currSongsArr = copyArr(songsArr);
        currSongsArr = shuffleArray(currSongsArr);
        btnShuffle.classList.add("pressed");
        shuffleFlage = true;
    } else {
        currSong = currSongsArr[j];
        console.log(currSong);
        j = songsArr.indexOf(currSong);
        console.log(j);
        currSongsArr = copyArr(songsArr);
        btnShuffle.classList.remove("pressed");
        shuffleFlage = false;
        // console.log(songsArr)

    }
}

function repeat() {
    if (repeatFlage == false) {
        audio.addEventListener("ended", activRepeat);
        repeatFlage = true;
        btnRepeat.classList.add("pressed")
    } else {
        audio.removeEventListener("ended", activRepeat);
        repeatFlage = false;
        btnRepeat.classList.remove("pressed")
    }
}

function activRepeat() {

    j++;
    if (j > currSongsArr.length - 1) {
        j = 0
    };
    song = currSongsArr[j];
    console.log(song)
    audio.setAttribute("src", "music/" + song);
    console.log(audio.setAttribute("src", "music/" + song + ".mp3"));
    audio.play();
}

function shuffleArray(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function copyArr(oldArr) {
    let newArr = [];
    for (let i = 0; i < oldArr.length; i++) {
        newArr[i] = oldArr[i];
    }
    return newArr;
}