sliderSection = document.querySelectorAll(".slider-section");

btnleft.addEventListener("click",e => movetoLeft())
btnRight.addEventListener("click",e => movetoRight())

setInterval(() => {
    moveToRight()
},3000);

let operacion = 0;
    widthImg =100 / sliderSection.length;

function moveToright() {
    if (counter >= sliderSection,length-1) {
        counter = 0;
        operacion=0;
        slider.style.transform = `translatel(-${operacion}%)`
        slider.style.transition = "none";
        return;
    } 
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform =`translate(-${operacion}%)`;
        slider.style.transform = "all ease .6s"
}

function moveToLeft( ) {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length-1;
        operacion= widthImg * (sliderSection.length-1);
        console.log(operacion)
        slider.style.transform = `translatel(-${operacion}%)`
        slider.style.transition = "none"
        return;
    } 
       operacion = operacion + widthImg;
       slider.style.transform =`translate(-${operacion}%)`;
       slider.style.transform = "all ease .6s"
    }