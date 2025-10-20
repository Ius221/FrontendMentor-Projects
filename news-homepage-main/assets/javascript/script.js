'use strict()';

/////////////////////////////
const openPage = document.querySelector('.open-page');
const closePage = document.querySelector('.close-page');
const sideBar = document.querySelector('.links');
const restBody = document.querySelector('.other-content');
const logo = document.querySelector('.logo');
/////////////////////////////



openPage.addEventListener("click", pageOpenClick);
closePage.addEventListener("click", pageCloseClick);


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

