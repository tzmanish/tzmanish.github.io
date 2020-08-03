"use strict"

function isDark(){
    return (
        localStorage.getItem("color-mode") == "dark"//check preference
        || (
            !localStorage.getItem("color-mode")     //no preference set
            && window.matchMedia('(prefers-color-scheme: dark)').matches //check os default
        )
    );
}

if(window.CSS && CSS.supports("color", "var(--bg)")){   //if mode toggle supported
    if(isDark()) {
        document.documentElement.setAttribute("color-mode", "dark");
        document.getElementById("icon-dark").style.display = "flex";
    } 
    else {
        document.documentElement.setAttribute("color-mode", "light");
        document.getElementById("icon-light").style.display = "flex";
    }
}

function toggleColorMode(){
    const mode = document.documentElement.getAttribute("color-mode");

    if(mode == "light"){
        document.documentElement.setAttribute("color-mode", "dark");
        localStorage.setItem("color-mode", "dark");
        document.getElementById("icon-dark").style.display = "flex";
        document.getElementById("icon-light").style.display = "none";
    } 
    else {
        document.documentElement.setAttribute("color-mode", "light");
        localStorage.setItem("color-mode", "light");
        document.getElementById("icon-light").style.display = "flex";
        document.getElementById("icon-dark").style.display = "none";
    }
}