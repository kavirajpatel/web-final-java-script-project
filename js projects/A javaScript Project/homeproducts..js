let body;
document.addEventListener('DOMContentLoaded',onDomLoaded);
function onDomLoaded() {
    body= document.querySelector('body');
    // const wrapperDivForCloths = document.createElement('div');
    const clothText = enterClothBody();
    body.append(clothText);
    const cardsBody = createBody();
    body.append(cardsBody);
    const accessoriesText = enterTextBody();
    body.append(accessoriesText);
    const cardsBody2 = createBody2();
    body.append(cardsBody2);
}
function enterClothBody() {
    const clothText = document.createElement('h2');
    clothText.classList.add('cloth-h2-tag');
    clothText.innerText = 'Accessories for Men and Women';
    return clothText;
}

function createBody() {
    const cardsBody =  document.createElement('div');
    cardsBody.classList.add('Clothing-card-container');
    const crd = createCard1();
    cardsBody.append(crd);
    const crd2 = createCard2();
    cardsBody.append(crd2);
    const crd3 = createCard3();
    cardsBody.append(crd3);
    const crd4 = createCard4();
    cardsBody.append(crd4);
    const crd5 = createCard5();
    cardsBody.append(crd5);
    return cardsBody;
    
} 
function createCard1() {
    const card = document.createElement('div');
    card.classList.add('cards');
    const imgwrap =  createDivForImg();
    card.append(imgwrap);
    const detailswrap =  createDivForDetails();
    card.append(detailswrap);
    return card;
}
function enterTextBody() {
    const accessoriesText = document.createElement('h2');
    accessoriesText.classList.add('cloth-h2-tag');
    accessoriesText.innerText = 'Accessories for Men and Women';
    return accessoriesText;
}

function createBody2() {
    const cardsBody2 =  document.createElement('div');
    cardsBody2.classList.add('Accessories-card-container');
    const crd6 = createCard6();
    cardsBody2.append(crd6);
    const crd7 = createCard7();
    cardsBody2.append(crd7);
    const crd8 = createCard8();
    cardsBody2.append(crd8);
    const crd9 = createCard9();
    cardsBody2.append(crd9);
    const crd10 = createCard10();
    cardsBody2.append(crd10);
    return cardsBody2;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------



function createDivForImg() {
    const card1imgwrap = document.createElement('div');
    card1imgwrap.classList.add('img-wrap');
    const pic = createAddImg();
    card1imgwrap.append(pic);
    return card1imgwrap;

}
function createDivForDetails() {
    const card1detailswrap = document.createElement('div');
    card1detailswrap.classList.add('details-wrap');
    const h3text = card1H3();
    card1detailswrap.append(h3text);
    const h4text = card1H4();
    card1detailswrap.append(h4text);
    const h5text = card1H5();
    card1detailswrap.append(h5text);
    return card1detailswrap;

}

function createAddImg() {
    const img = document.createElement('img');
    img.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg';
    img.classList.add('image');
    return img;
}

function card1H3() {
    const card1heading = document.createElement('h3');
    card1heading.classList.add('head-h3');
    card1heading.innerText = 'Men Navy Blue Solid Sweatshirt';
    return card1heading;
}

function card1H4() {
    const card1heading2 = document.createElement('h4')
    card1heading2.classList.add('head-h4')
    card1heading2.innerText = 'United Colors of Benetton';
    return card1heading2;
}
function card1H5() {
    const card1heading3 = document.createElement('h5')
    card1heading3.classList.add('head-h5')
    card1heading3.innerText = 'Rs 2599';
    return card1heading3;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

function createCard2() {
    const card2 = document.createElement('div');
    card2.classList.add('cards');
    const imgwrap =  createDivForImg2();
    card2.append(imgwrap);
    const detailswrap =  createDivForDetails2();
    card2.append(detailswrap);
    return card2;
}

function createDivForImg2() {
    const card2imgwrap = document.createElement('div');
    card2imgwrap.classList.add('img-wrap');
    const pic2 = createAddImg2();
    card2imgwrap.append(pic2);
    return card2imgwrap;

}
function createDivForDetails2() {
    const card2detailswrap = document.createElement('div');
    card2detailswrap.classList.add('details-wrap');
    const h3text2 = card2H3();
    card2detailswrap.append(h3text2);
    const h4text2 = card2H4();
    card2detailswrap.append(h4text2);
    const h5text2 = card2H5();
    card2detailswrap.append(h5text2);
    return card2detailswrap;
}
function createAddImg2() {
    const img2 = document.createElement('img');
    img2.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg';
    img2.classList.add('image');
    return img2;
}

function card2H3() {
    const card2heading = document.createElement('h3');
    card2heading.classList.add('head-h3');
    card2heading.innerText = 'Men Black MAMGP T7 Sweat Sporty Jacket';
    return card2heading;
}

function card2H4() {
    const card2heading2 = document.createElement('h4')
    card2heading2.classList.add('head-h4')
    card2heading2.innerText = 'Puma';
    return card2heading2;
}
function card2H5() {
    const card2heading3 = document.createElement('h5')
    card2heading3.classList.add('head-h5')
    card2heading3.innerText = 'Rs 7999';
    return card2heading3;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

function createCard3() {
    const card3 = document.createElement('div');
    card3.classList.add('cards');
    const imgwrap =  createDivForImg3();
    card3.append(imgwrap);
    const detailswrap =  createDivForDetails3();
    card3.append(detailswrap);
    return card3;
}

function createDivForImg3() {
    const card3imgwrap = document.createElement('div');
    card3imgwrap.classList.add('img-wrap');
    const pic3 = createAddImg3();
    card3imgwrap.append(pic3);
    return card3imgwrap;

}
function createDivForDetails3() {
    const card3detailswrap = document.createElement('div');
    card3detailswrap.classList.add('details-wrap');
    const h3text3 = card3H3();
    card3detailswrap.append(h3text3);
    const h4text3 = card3H4();
    card3detailswrap.append(h4text3);
    const h5text3 = card3H5();
    card3detailswrap.append(h5text3);
    return card3detailswrap;
}


function createAddImg3() {
    const img3 = document.createElement('img');
    img3.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg';
    img3.classList.add('image');
    return img3;
}

function card3H3() {
    const card3heading = document.createElement('h3');
    card3heading.classList.add('head-h3');
    card3heading.innerText = 'Men Black Action Parkview Lifestyle Shoes';
    return card3heading;
}

function card3H4() {
    const card3heading2 = document.createElement('h4')
    card3heading2.classList.add('head-h4')
    card3heading2.innerText = 'Hush Puppies';
    return card3heading2;
}
function card3H5() {
    const card3heading3 = document.createElement('h5')
    card3heading3.classList.add('head-h5')
    card3heading3.innerText = 'Rs 6999';
    return card3heading3;
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------



function createCard4() {
    const card4 = document.createElement('div');
    card4.classList.add('cards');
    const imgwrap =  createDivForImg4();
    card4.append(imgwrap);
    const detailswrap =  createDivForDetails4();
    card4.append(detailswrap);
    return card4;
}

function createDivForImg4() {
    const card4imgwrap = document.createElement('div');
    card4imgwrap.classList.add('img-wrap');
    const pic4 = createAddImg4();
    card4imgwrap.append(pic4);
    return card4imgwrap;

}
function createDivForDetails4() {
    const card4detailswrap = document.createElement('div');
    card4detailswrap.classList.add('details-wrap');
    const h3text4 = card4H3();
    card4detailswrap.append(h3text4);
    const h4text4 = card4H4();
    card4detailswrap.append(h4text4);
    const h5text4 = card4H5();
    card4detailswrap.append(h5text4);
    return card4detailswrap;
}


function createAddImg4() {
    const img4 = document.createElement('img');
    img4.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg';
    img4.classList.add('image');
    return img4;
}

function card4H3() {
    const card4heading = document.createElement('h3');
    card4heading.classList.add('head-h3');
    card4heading.innerText = 'Women Black Solid Lightweight Leather Jacket';
    return card4heading;
}

function card4H4() {
    const card4heading2 = document.createElement('h4')
    card4heading2.classList.add('head-h4')
    card4heading2.innerText = 'BARESKIN';
    return card4heading2;
}
function card4H5() {
    const card4heading3 = document.createElement('h5')
    card4heading3.classList.add('head-h5')
    card4heading3.innerText = 'Rs 9999';
    return card4heading3;
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

function createCard5() {
    const card5 = document.createElement('div');
    card5.classList.add('cards');
    const imgwrap =  createDivForImg5();
    card5.append(imgwrap);
    const detailswrap =  createDivForDetails5();
    card5.append(detailswrap);
    return card5;
}

function createDivForImg5() {
    const card5imgwrap = document.createElement('div');
    card5imgwrap.classList.add('img-wrap');
    const pic5 = createAddImg5();
    card5imgwrap.append(pic5);
    return card5imgwrap;

}
function createDivForDetails5() {
    const card5detailswrap = document.createElement('div');
    card5detailswrap.classList.add('details-wrap');
    const h3text5 = card5H3();
    card5detailswrap.append(h3text5);
    const h4text5 = card5H4();
    card5detailswrap.append(h4text5);
    const h5text5 = card5H5();
    card5detailswrap.append(h5text5);
    return card5detailswrap;
}
5
function createAddImg5() {
    const img5 = document.createElement('img');
    img5.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg';
    img5.classList.add('image');
    return img5;
}

function card5H3() {
    const card5heading = document.createElement('h3');
    card5heading.classList.add('head-h3');
    card5heading.innerText = 'Women Blue Solid Shirt Dress';
    return card5heading;
}

function card5H4() {
    const card5heading2 = document.createElement('h4')
    card5heading2.classList.add('head-h4')
    card5heading2.innerText = 'SASSAFRAS';
    return card5heading2;
}
function card5H5() {
    const card5heading3 = document.createElement('h5')
    card5heading3.classList.add('head-h5')
    card5heading3.innerText = 'Rs 5200';
    return card5heading3;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// document.write("<h2 style= 'margin-top: 100px; margin-left: 70px; color: rgb(27, 25, 25);' >Accessories for Men and Women</h2>");



// function AccessoriesText() {
//     const text2 = document.createElement('h2');
//     text2.classList.add('cloth-h2-tag');
//     text2.innerText = 'Accessories for Men and Women';
//     return text2;
// }

function createCard6() {
    const card6 = document.createElement('div');
    card6.classList.add('cards');
    const imgwrap =  createDivForImg6();
    card6.append(imgwrap);
    const detailswrap =  createDivForDetails6();
    card6.append(detailswrap);
    return card6;
}

function createDivForImg6() {
    const card6imgwrap = document.createElement('div');
    card6imgwrap.classList.add('img-wrap');
    const pic6 = createAddImg6();
    card6imgwrap.append(pic6);
    return card6imgwrap;

}
function createDivForDetails6() {
    const card6detailswrap = document.createElement('div');
    card6detailswrap.classList.add('details-wrap');
    const h3text6 = card6H3();
    card6detailswrap.append(h3text6);
    const h4text6 = card6H4();
    card6detailswrap.append(h4text6);
    const h5text6 = card6H5();
    card6detailswrap.append(h5text6);
    return card6detailswrap;
}
function createAddImg6() {
    const img6 = document.createElement('img');
    img6.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg';
    img6.classList.add('image');
    return img6;
}

function card6H3() {
    const card6heading = document.createElement('h3');
    card6heading.classList.add('head-h3');
    card6heading.innerText = 'Unisex Silver-Toned Series 3 Smart Watch';
    return card6heading;
}

function card6H4() {
    const card6heading2 = document.createElement('h4')
    card6heading2.classList.add('head-h4')
    card6heading2.innerText = 'Apple';
    return card6heading2;
}
function card6H5() {
    const card6heading3 = document.createElement('h5')
    card6heading3.classList.add('head-h5')
    card6heading3.innerText = 'Rs 31999';
    return card6heading3;
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function createCard7() {
    const card7 = document.createElement('div');
    card7.classList.add('cards');
    const imgwrap =  createDivForImg7();
    card7.append(imgwrap);
    const detailswrap =  createDivForDetails7();
    card7.append(detailswrap);
    return card7;
}

function createDivForImg7() {
    const card7imgwrap = document.createElement('div');
    card7imgwrap.classList.add('img-wrap');
    const pic7 = createAddImg7();
    card7imgwrap.append(pic7);
    return card7imgwrap;

}
function createDivForDetails7() {
    const card7detailswrap = document.createElement('div');
    card7detailswrap.classList.add('details-wrap');
    const h3text7 = card7H3();
    card7detailswrap.append(h3text7);
    const h4text7 = card7H4();
    card7detailswrap.append(h4text7);
    const h5text7 = card7H5();
    card7detailswrap.append(h5text7);
    return card7detailswrap;
}

function createAddImg7() {
    const img7 = document.createElement('img');
    img7.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg';
    img7.classList.add('image');
    return img7;
}

function card7H3() {
    const card7heading = document.createElement('h3');
    card7heading.classList.add('head-h3');
    card7heading.innerText = 'Unisex Black & Green Reflex 2.0 Smart Band';
    return card7heading;
}

function card7H4() {
    const card7heading2 = document.createElement('h4')
    card7heading2.classList.add('head-h4')
    card7heading2.innerText = 'Fastrack';
    return card7heading2;
}
function card7H5() {
    const card7heading3 = document.createElement('h5')
    card7heading3.classList.add('head-h5')
    card7heading3.innerText = 'Rs 1999';
    return card7heading3;
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function createCard8() {
    const card8 = document.createElement('div');
    card8.classList.add('cards');
    const imgwrap =  createDivForImg8();
    card8.append(imgwrap);
    const detailswrap =  createDivForDetails8();
    card8.append(detailswrap);
    return card8;
}

function createDivForImg8() {
    const card8imgwrap = document.createElement('div');
    card8imgwrap.classList.add('img-wrap');
    const pic8 = createAddImg8();
    card8imgwrap.append(pic8);
    return card8imgwrap;

}
function createDivForDetails8() {
    const card8detailswrap = document.createElement('div');
    card8detailswrap.classList.add('details-wrap');
    const h3text8 = card7H3();
    card8detailswrap.append(h3text8);
    const h4text8 = card7H4();
    card8detailswrap.append(h4text8);
    const h5text8 = card7H5();
    card8detailswrap.append(h5text8);
    return card8detailswrap;
}

function createAddImg8() {
    const img8 = document.createElement('img');
    img8.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg';
    img8.classList.add('image');
    return img8;
}

function card8H3() {
    const card8heading = document.createElement('h3');
    card8heading.classList.add('head-h3');
    card8heading.innerText = 'Unisex Black Galaxy Fit Fitness Band';
    return card8heading;
}

function card8H4() {
    const card8heading2 = document.createElement('h4')
    card8heading2.classList.add('head-h4')
    card8heading2.innerText = 'Samsung';
    return card8heading2;
}
function card8H5() {
    const card8heading3 = document.createElement('h5')
    card8heading3.classList.add('head-h5')
    card8heading3.innerText = 'Rs 9990';
    return card8heading3;
}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function createCard9() {
    const card9 = document.createElement('div');
    card9.classList.add('cards');
    const imgwrap =  createDivForImg9();
    card9.append(imgwrap);
    const detailswrap =  createDivForDetails9();
    card9.append(detailswrap);
    return card9;
}

function createDivForImg9() {
    const card9imgwrap = document.createElement('div');
    card9imgwrap.classList.add('img-wrap');
    const pic9 = createAddImg9();
    card9imgwrap.append(pic9);
    return card9imgwrap;

}
function createDivForDetails9() {
    const card9detailswrap = document.createElement('div');
    card9detailswrap.classList.add('details-wrap');
    const h3text9 = card10H3();
    card9detailswrap.append(h3text9);
    const h4text9 = card10H4();
    card9detailswrap.append(h4text9);
    const h5text9 = card10H5();
    card9detailswrap.append(h5text9);
    return card9detailswrap;
}
5
function createAddImg9() {
    const img9 = document.createElement('img');
    img9.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg';
    img9.classList.add('image');
    return img9;
}

function card9H3() {
    const card9heading = document.createElement('h3');
    card9heading.classList.add('head-h3');
    card9heading.innerText = 'Gear IconX Black Cord-free Fitness Earbuds';
    return card9heading;
}

function card9H4() {
    const card9heading2 = document.createElement('h4')
    card9heading2.classList.add('head-h4')
    card9heading2.innerText = 'Samsung';
    return card9heading2;
}
function card9H5() {
    const card5heading3 = document.createElement('h5')
    card9hheading3.classList.add('head-h5')
    card9hheading3.innerText = 'Rs 13990';
    return card9heading3;
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function createCard10() {
    const card10 = document.createElement('div');
    card10.classList.add('cards');
    const imgwrap =  createDivForImg10();
    card10.append(imgwrap);
    const detailswrap =  createDivForDetails10();
    card10.append(detailswrap);
    return card10;
}

function createDivForImg10() {
    const card10imgwrap = document.createElement('div');
    card10imgwrap.classList.add('img-wrap');
    const pic10 = createAddImg10();
    card10imgwrap.append(pic10);
    return card10imgwrap;

}
function createDivForDetails10() {
    const card10detailswrap = document.createElement('div');
    card10detailswrap.classList.add('details-wrap');
    const h3text10 = card10H3();
    card10detailswrap.append(h3text10);
    const h4text10 = card10H4();
    card10detailswrap.append(h4text10);
    const h5text10 = card10H5();
    card10detailswrap.append(h5text10);
    return card10detailswrap;
}
5
function createAddImg10() {
    const img10 = document.createElement('img');
    img10.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg';
    img10.classList.add('image');
    return img10;
}

function card10H3() {
    const card10heading = document.createElement('h3');
    card10heading.classList.add('head-h3');
    card10heading.innerText = 'White 2nd Gen AirPods with Charging Case';
    return card10heading;
}

function card10H4() {
    const card10heading2 = document.createElement('h4')
    card10heading2.classList.add('head-h4')
    card10heading2.innerText = 'Apple';
    return card10heading2;
}
function card10H5() {
    const card5heading3 = document.createElement('h5')
    card5heading3.classList.add('head-h5')
    card5heading3.innerText = 'Rs 14999';
    return card5heading3;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------