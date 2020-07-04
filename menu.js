const hamburger = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')

hamburger.addEventListener('click', () => {
   //Esto significa que quite o ponga la clase spread a .hamburguer dependiendo del estado que tenga
   menu.classList.toggle("spread");
});

window.addEventListener('click', e=> {
    //El e.target es si le das click a un elemento
    //En este caso es si le das click a un elemento que no es el menu o la hamburguesa pon 
    //o quita la clase spread
    //classlist es si el elemento que le indicas contiene esa clase o no
    //En este caso es si menu contiene la clase spread haz esto
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger){
        menu.classList.toggle("spread");
    }
}); 