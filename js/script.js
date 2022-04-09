// MOSTRAR MENÚ EN MOBILE
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-cerrar')

if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

//QUITAR MENÚ MOBILE HACIENDO CLICK A UNA CATEGORÍA
const navLink =document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


// BOTONES DE FILTRAR PRODUCTOS (CÓDIGO EXTERNO)
var mixerProducts = mixitup('.productos--cards', {
    selectors: {
        target: '.cards-item'
    },
    animation: {
        duration: 300
    }
});

mixerProducts.filter('.frutales');

const linkProducts = document.querySelectorAll('.categorias-single')

function activeProducts(){
    linkProducts.forEach(l=> l.classList.remove('active-product'));
    this.classList.add('active-product');
}

linkProducts.forEach(l=> l.addEventListener('click', activeProducts));