'use strict';

/////////////////////////////
const openPage = document.querySelector('.open-page');
const closePage = document.querySelector('.close-page');
const sideBar = document.querySelector('.links');
const restBody = document.querySelector('.other-content');
const logo = document.querySelector('.logo');
const img = document.querySelector('.main-img');
const mediaQuery = window.matchMedia('(min-width: 768px)');
/////////////////////////////



openPage.addEventListener("click", pageOpenClick);
closePage.addEventListener("click", pageCloseClick);
mediaQuery.addEventListener('change', changeImage);
changeImage(mediaQuery);

function pageOpenClick() {
    console.log("ailaa jaduu");
    sideBar.style.opacity = 1;
    sideBar.style.zIndex = 1;
    restBody.style.opacity = .5;
    restBody.style.filter = "brightness(0.6)";
    logo.style.opacity = .5;
    logo.style.filter = "brightness(0.6)";
    document.body.style.overflowY = 'hidden';
}

function pageCloseClick() {
    // console.log("ailaa jaduu");
    sideBar.style.opacity = 0;
    sideBar.style.zIndex = -1;
    restBody.style.opacity = 1;
    restBody.style.filter = "brightness(1)";
    logo.style.opacity = 1;
    logo.style.filter = "brightness(1)";
    document.body.style.overflowY = 'scroll';
}

function changeImage(e) {
    if (e.matches) img.src = './assets/images/image-web-3-desktop.jpg';
    else img.src = './assets/images/image-web-3-mobile.jpg';

}
