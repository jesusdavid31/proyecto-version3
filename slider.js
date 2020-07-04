let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 5000;

/* Este window se pone para que por ejemplo si pasas de un celular que esta en sentido vertical 
y lo volteas y la pantalla sea hoprizontal, no se va romper la maquetacion o los estilos con esto,
practicamente se va a adaptar */
window.addEventListener("resize", function(){
    //La variable width se ira actualizando al tamaño de la pantalla
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1.5s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}