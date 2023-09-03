// audio

var myaudio = document.getElementById("audioID");

    function play() { 
    return myaudio.play(); 
    };

    function stop() {
    return myaudio.pause(); 
    };

// show or hide

const divContainer = document.querySelector(".slider");
let isClicked = true;

let showOrHide = function(){
    if(isClicked){
        divContainer.style.display = 'block';
        isClicked = false;
    }else{
        divContainer.style.display = 'none';
        isClicked = true;
    }
}

// menghilang opacity

const element = document.getElementById('animasi');
const showTime = 3000000; // Waktu (dalam milidetik) ketika konten akan muncul (3 detik dalam contoh ini)

  setTimeout(() => {
    element.style.animation = 'none'; // Menghapus animasi agar konten muncul langsung
    element.style.opacity = 1;
  }, showTime);

// perpindahan tempat

const content = document.getElementById('card');
const animateButton = document.getElementById('container');

animateButton.addEventListener('click', () => {
  content.classList.toggle('animating'); // Tambah atau hilangkan kelas "animating"
});
