let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pausar slide

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// reiniciar slide
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

//autoplay
setInterval(() => {
     if (!slide_play) return
     nextSlide()
     showSlide()
 }, 3000);

// render produtos

let products = [
    {
        name: 'Rouge Louboutin',
        image1: './img/products/lips/christianlouboutin-rougelouboutin-velvet-matte-1.png',
        image2: './img/products/lips/christianlouboutin-rougelouboutin-velvet-matte-2.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Dior Strong Matte',
        image1: './img/products/lips/Son-Dior-Rouge-634-Strong-Matte.png',
        image2: './img/products/lips/Son-Dior-Rouge-634-Strong-Matte-2.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'YSL',
        image1: './img/products/lips/son-kem-ysl-425.png',
        image2: './img/products/lips/son-kem-ysl-425-2.png',
        old_price: '500',
        curr_price: '300'
    },
    {
        name: 'YSL',
        image1: './img/products/lips/son-kem-ysl-425.png',
        image2: './img/products/lips/son-kem-ysl-425-2.png',
        old_price: '500',
        curr_price: '300'
    },
    {
        name: 'Dior Strong Matte',
        image1: './img/products/lips/Son-Dior-Rouge-634-Strong-Matte.png',
        image2: './img/products/lips/Son-Dior-Rouge-634-Strong-Matte-2.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Rouge Louboutin',
        image1: './img/products/lips/christianlouboutin-rougelouboutin-velvet-matte-1.png',
        image2: './img/products/lips/christianlouboutin-rougelouboutin-velvet-matte-2.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'TOM FORD Ruby Rush',
        image1: './img/products/lips/Tom-Ford-RUBY-RUSH.png',
        image2: './img/products/lips/Tom-Ford-RUBY-RUSH-2.png',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">comprar</a>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})


