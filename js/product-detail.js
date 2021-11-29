document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content')
    content.classList.toggle('active')
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'ver menos' : 'ver tudo'
})

let products = [
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
]

let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
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
    })
}

renderProducts(products)

//color picker

document.getElementById('color-a').addEventListener('click', function() {
    document.getElementById('color-overlay').style.transform = 'translateX(-0.5px)';
    document.getElementById('background-element').style.backgroundColor = '#333';
    document.getElementById('highlight-overlay').style.opacity = '1';
    document.getElementById('highlight-overlay-mobile').style.opacity = '1';
  
  })
  document.getElementById('color-b').addEventListener('click', function() {
    document.getElementById('color-overlay').style.transform = 'translateX(45px)';
    document.getElementById('background-element').style.backgroundColor = '#457';
    document.getElementById('highlight-overlay').style.opacity = '0';
    document.getElementById('highlight-overlay-mobile').style.opacity = '0';
  })

//btn quantity
$('.add').click(function () {
    if ($(this).prev().val() < 99) {
    $(this).prev().val(+$(this).prev().val() + 1);
    }
});
$('.sub').click(function () {
    if ($(this).next().val() > 1) {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
});