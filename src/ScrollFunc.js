import React from "react";

let CloseNav = () => {
    document.getElementById("sidebar").style.display = "none"
    document.getElementById("sidebar").style.opacity = "0"
    document.getElementById("sidebar").style.marginRight = "-215px"
    document.getElementById('display-page').style.filter = 'none'
    document.body.style.overflowY = "scroll"
}

let ScrolltoTop = () => {
    if (window.innerWidth > 1000) {
        document.documentElement.scrollTop = 0;
    }
    else {
        document.documentElement.scrollTop = 0;
        CloseNav();
    }
}

let ScrollToSkillsDesktop = () => {
    if (window.innerWidth > 1000) {
        document.documentElement.scrollTop = 651;
    }
    else {
        document.documentElement.scrollTop = 651;
        CloseNav();
    }
}

let ScrollToPortDesktop = () => {
    if (window.innerWidth > 1000) {
        document.documentElement.scrollTop = 4200;
    }
    else {
        document.documentElement.scrollTop = 4000;
        CloseNav();
    }
}

let ScrollToAboutDesktop = () => {
    if (window.innerWidth > 1000) {
        document.documentElement.scrollTop = 5182;
    }
    else {
        document.documentElement.scrollTop = 5104;
        CloseNav();
    }
}

let ScrollToContactDesktop = () => {
    if (window.innerWidth > 1000) {
        document.documentElement.scrollTop = 6631;
    }
    else {
        document.documentElement.scrollTop = 7409;
        CloseNav();
    }
}

export {ScrollToSkillsDesktop ,ScrolltoTop ,ScrollToPortDesktop ,ScrollToAboutDesktop ,ScrollToContactDesktop};