let body;
document.addEventListener('DOMContentLoaded', onDomLoaded);
function onDomLoaded() {
    body = document.querySelector('body');
    const sectionElement = mainWrapper();
    body.appendChild(sectionElement);
}

//creating main wrapper
function mainWrapper() {
    const sectionElement = document.createElement('section');
    sectionElement.id = 'product';
    const left = leftColumnWrapper();
    sectionElement.appendChild(left);
    const right = rightColumnWrapper();
    sectionElement.appendChild(right);
    return sectionElement;
}

//creating left column wrapper
function leftColumnWrapper() {
    const leftColumnElement = document.createElement('div');
    leftColumnElement.classList.add('left-column');
    const leftImg = imgSecionMain();
    leftColumnElement.appendChild(leftImg);
    return leftColumnElement;
}

//creating left main image section
function imgSecionMain() {
    var img0 = document.createElement('img');
    img0.id = 'productImg';
    img0.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg';
    return img0;

}
//creating right column wrapper
function rightColumnWrapper() {
    const rightColumnElement = document.createElement('div');
    rightColumnElement.classList.add('right-column');
    const detailwrap = allDetails();
    rightColumnElement.appendChild(detailwrap);
    const btnLast = cartButtonDiv();
    rightColumnElement.appendChild(btnLast);
    return rightColumnElement;
}

// details wrapper
function allDetails() {
    const details = document.createElement('div');
    details.classList.add('product-description');
    const name = tshirtName();
    details.appendChild(name);
    const brand = tshirtBrand();
    details.appendChild(brand);
    const price = priceWrapper();
    details.appendChild(price);
    const des_head = descriptionWrapper();
    details.appendChild(des_head);
    const des_text = preview();
    details.appendChild(des_text);
    return details;
}

//tshirt name
function tshirtName() {
    const nameH1 = document.createElement('h1');
    nameH1.id = 'name';
    nameH1.innerText = 'Men Navy Blue Solid Sweatshirt';
    return nameH1
}

//tshirt brand
function tshirtBrand() {
    const brandH4 = document.createElement('h4')
    brandH4.id = 'brand';
    brandH4.innerText = 'United Colors of Benetton';
    return brandH4;
}

//tshirt price
function priceWrapper() {
    const priceTag = document.createElement('h3');
    priceTag.innerText = 'Price: Rs ';
    const rupee = priceRupees();
    priceTag.appendChild(rupee);
    return priceTag;
}
function priceRupees() {
    const price = document.createElement('span');
    price.id = 'price';
    price.innerText = '2599';
    return price;
}

// product description
function descriptionWrapper() {
    const descriptionHeading = document.createElement('div');
    descriptionHeading.classList.add('description');
    const h3InDes_ = insideDescriptionWrapperHeading();
    descriptionHeading.appendChild(h3InDes_);
    const paraIn_ = insideDescriptionWrapperPara();
    descriptionHeading.appendChild(paraIn_);
    return descriptionHeading;
}

function insideDescriptionWrapperHeading() {
    const createH3InDeswrap = document.createElement('h3');
    createH3InDeswrap.innerText = 'Description';
    return createH3InDeswrap;
}

function insideDescriptionWrapperPara() {
    const paraInDeswrap = document.createElement('p');
    paraInDeswrap.innerText = 'Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem';
    return paraInDeswrap;
}


//Image preview section
function preview() {
    const descriptionText = document.createElement('div');
    descriptionText.classList.add('product-preview');
    const preText = previewHeading();
    descriptionText.appendChild(preText);
    const preImg = previewImageWrapper ();
    descriptionText.appendChild(preImg);
    return descriptionText;
}

function previewHeading() {
    const previewBold = document.createElement('h3');
    previewBold.innerText = 'Product Preview';
    return previewBold;
}

function previewImageWrapper () {
    const previewImg = document.createElement('div');
    previewImg.classList.add('previewImg');
    const imgCard0 = createAddImg0();
    previewImg.appendChild(imgCard0);
    const imgCard1 = createAddImg1();
    previewImg.appendChild(imgCard1);
    const imgCard2 = createAddImg2();
    previewImg.appendChild(imgCard2);
    const imgCard3 = createAddImg3();
    previewImg.appendChild(imgCard3);
    const imgCard4 = createAddImg4();
    previewImg.appendChild(imgCard4);
    const imgCard5 = createAddImg5();
    previewImg.appendChild(imgCard5);
    return previewImg;
}

function createAddImg0() {
    var img0 = document.createElement('img');
    img0.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg';
    img0.id = 'img0',
    img0.classList.add('active');
    return img0;
}
function createAddImg1() {
    var img1 = document.createElement('img');
    img1.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg';
    img1.id = 'img1',
    img1.classList.add('active');
    return img1;
}
function createAddImg2() {
    var img2 = document.createElement('img');
    img2.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg';
    img2.id = 'img2',
    img2.classList.add('active');
    return img2;
}
function createAddImg3() {
    var img3 = document.createElement('img');
    img3.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg';
    img3.id = 'img3',
    img3.classList.add('active');
    return img3;
}
function createAddImg4() {
    var img4 = document.createElement('img');
    img4.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg';
    img4.classList.add('active');
    return img4;
}
function createAddImg5() {
    var img5 = document.createElement('img');
    img5.src = '';
    img5.id = 'img5',
    img5.classList.add('active');
    return img5;
}


document.addEventListener('DOMContentLoaded', function() {
    var mainImg = document.getElementById("productImg");
    var smallImages = document.getElementsByClassName("active");

    for (var i = 0; i < smallImages.length; i++) {
        smallImages[i].onclick = function() {
            // Remove the border
            for (var j = 0; j < smallImages.length; j++) {
                smallImages[j].classList.remove("active-border");
            }
            
            // Add the border 
            this.classList.add("active-border");

            // Change the main image source
            mainImg.src = this.src;
        };
    }
});


// creating Button
function cartButtonDiv() {
    const btnCart = document.createElement('div');
    btnCart.classList.add('btn');
    const btn = button();
    btnCart.appendChild(btn);
    return btnCart;
}

function button() {
    const cart = document.createElement('button');
    cart.classList.add('add-to-cart');
    cart.innerText = 'Add to Cart';
    return cart;
}
