"use strict"

if(window.CSS && CSS.supports("color", "var(--background)")){    //if color mode functionality is supported
    const toggleButton = document.getElementById("color-mode-toggle-button");
    toggleButton.style.display = "inline-block";
    if(      //check os default and previous preference
        localStorage.getItem("color-mode") == "dark" || 
        (!localStorage.getItem("color-mode") && window.matchMedia('(prefers-color-scheme: dark').matches)
        ) {
        document.documentElement.setAttribute("color-mode", "dark");
    } else document.documentElement.setAttribute("color-mode", "light");
}

function toggleColorMode(){
    const mode = document.documentElement.getAttribute("color-mode");
    if(mode == "light"){
        document.documentElement.setAttribute("color-mode", "dark");
        localStorage.setItem("color-mode", "dark");
    } else {
        document.documentElement.setAttribute("color-mode", "light");
        localStorage.setItem("color-mode", "light")
    }
}