let conf = confirm(`Внимание! На данном сайте присутствует фоновая музыка. \n
Чтобы разрешить проигрывание нажмите 'Да', чтобы запретить, нажмите 'Отмена'`);
let audio = document.getElementById("audio");

if(conf == true) {
  audio.volume = 0.5;
} else {
  audio.volume = 0;
}