// const nav =document.querySelector('nav');

// window.addEventListener('scroll',()=>{
// if(window.scrollY >30){
//     nav.classList.add('nav-anim')
// }else{
//     nav.classList.remove('nav-anim')

// }

// })
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.img-manue',reverse:false
    


})
.setClassToggle('.img-manue', 'fade-in')

.addTo(controller);