//dropdown-mega menu-menu hamburguer
document.querySelectorAll('.dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelector('#mb-menu-toggle').addEventListener('click', () => document.querySelector('#header-wrapper').classList.add('active'))

document.querySelector('#mb-menu-close').addEventListener('click', () => document.querySelector('#header-wrapper').classList.remove('active'))

//gallery
new Glide('.gallery-slide', {
    type: 'carousel',
    starAt: 0,
    perView: 8,
}).mount()

//product details - slide on hover
$(document).ready(function(){
    $('.box img').mouseover(function(e){
        e.preventDefault();
        $('.product-img img').attr("src", $(this).attr("src"))
    })
})