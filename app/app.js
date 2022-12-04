const playBtn = document.querySelector('.play'),
    prevBtn = document.querySelector('.prev-btn'),
    nextBtn = document.querySelector('.next-btn'),
    title = document.querySelector('.song-name'),
    author = document.querySelector('.author'),
    image = document.querySelector('.left'),
    progress = document.querySelector('.progress'),
    line = document.querySelector('.string'),
    time = document.querySelector('.time'),
    repeat = document.querySelector('.repeat'),
    like = document.querySelector('.like');

const audioTag = document.createElement('audio');

const songs = [
    {
        author: 'Порнофильмы',
        title: 'Прости. Прощай. Привет.mp3',
        src: '../audio/Порнофильмы - Прости. Прощай. Привет.mp3',
        image: '../assets/porn.jpg',
    },
    {
        author: 'Макс Корж',
        title: 'Малый повзрослел',
        src: '../audio/Макс Корж - Малый повзрослел.mp3',
        image: '../assets/korj.jpg',
    },
    {
        author: 'Порнофильмы',
        title: 'Я так соскучился',
        src: '../audio/Порнофильмы - Я так соскучился.mp3',
        image: '../assets/porn.jpg',
    },
];

let playFlag = false,
    indexOfSong = 0;

title.innerHTML = songs[indexOfSong].title;
author.innerHTML = songs[indexOfSong].author;
image.src = songs[indexOfSong].image;
audioTag.src = songs[indexOfSong].src;
console.log(image.src);
playBtn.addEventListener('click', () => {
    currentSong();
});

prevBtn.addEventListener('click', () => {
    if (indexOfSong === 0) {
        indexOfSong = songs.length - 1;
    } else {
        indexOfSong--;
    }
    changeSong();
});

nextBtn.addEventListener('click', () => {
    if (indexOfSong === songs.length - 1) {
        indexOfSong = 0;
    } else {
        indexOfSong++;
    }
    changeSong();
});

function changeSong() {
    audioTag.src = songs[indexOfSong].src;
    title.innerHTML = songs[indexOfSong].title;
    author.innerHTML = songs[indexOfSong].author;
    image.src = songs[indexOfSong].image;
    console.log(image.src);
    console.log(audioTag.src);
    audioTag.play();
    playFlag = true;
    playBtn.style = 'background-image: url(../assets/img/pause.svg);';
}

function currentSong() {
    if (!playFlag) {
        playBtn.style = 'background-image: url(../assets/img/pause.svg)';
        audioTag.play();
        playFlag = true;
    } else {
        playBtn.style = 'background-image: url(../assets/img/playBtn.svg)';
        audioTag.pause();
        playFlag = false;
    }
}


audioTag.addEventListener('timeupdate', (event) => {
    const duration = event.target.duration;
    const currentTime = event.target.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    let min=0
    let sec = Math.floor(currentTime)
    if(sec<10)sec=`0${sec}`
    if(sec>59){
        min+=1
        sec=Math.floor(currentTime-60*min)
    }
    time.innerText = `${min}:${sec}`;
}
)