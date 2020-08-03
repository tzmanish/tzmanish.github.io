"use strict"

function isDarkPreferred(){
    return (
        localStorage.getItem("color-mode") == "dark"//check preference
        || (
            !localStorage.getItem("color-mode")     //no preference set
            && window.matchMedia('(prefers-color-scheme: dark)').matches //check os default
        )
    );
}

function setColorModeIcon(mode){
    if(mode == "dark"){
        document.getElementById("icon-light").style.display = "flex";
        document.getElementById("icon-dark").style.display = "none";
    }
    else{
        document.getElementById("icon-dark").style.display = "flex";
        document.getElementById("icon-light").style.display = "none";
    }
}

if(window.CSS && CSS.supports("color", "var(--bg)")){   //if mode toggle supported
    if(isDarkPreferred()) {
        document.documentElement.setAttribute("color-mode", "dark");
        setColorModeIcon("dark");
    } 
    else {
        document.documentElement.setAttribute("color-mode", "light");
        setColorModeIcon("light")
    }
}

function toggleColorMode(){
    const mode = document.documentElement.getAttribute("color-mode");

    if(mode == "light"){
        document.documentElement.setAttribute("color-mode", "dark");
        localStorage.setItem("color-mode", "dark");
        setColorModeIcon("dark");
    } 
    else {
        document.documentElement.setAttribute("color-mode", "light");
        localStorage.setItem("color-mode", "light");
        setColorModeIcon("light")
    }
}