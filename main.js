let slider = document.querySelector('.slidercuadro');
let sliderInd = document.querySelectorAll('.slidertest');
let contador = 1;
let tamañowidth =sliderInd [0].clientWidth;
let intervalo =15000;

window.addEventListener("resize", function(){
  tamañowidth =sliderInd [0].clientWidth;
})

setInterval(function tiempo(){
 slides();
}, intervalo);

function slides(){
  slider.style.transform ='translate('+ (- tamañowidth * contador) + 'px)';
  slider.style.trasition ='transform 1s';
  contador++;

  if (contador === sliderInd.length){
    contador=0;
    setTimeout(function(){
      slider.style.transform ='translate(0px)';
      slider.style.trasition ='transform 0s';


    }, intervalo)
  }

}
