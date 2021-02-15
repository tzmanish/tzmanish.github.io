"use strict"

class ThemeManager{
    constructor(){
        // return if mode toggle not supported
        if(!window.CSS || !CSS.supports("color", "var(--bg)")) return;

        document.getElementById("color-mode-toggle-button").classList.remove("hidden");
        this.iconDark = document.getElementById("icon-dark");
        this.iconLight = document.getElementById("icon-light");

        if(this.isDarkPreferred()) {
            document.documentElement.setAttribute("color-mode", "dark");
            this.setColorModeIcon("dark");
        } else {
            document.documentElement.setAttribute("color-mode", "light");
            this.setColorModeIcon("light");
        }
    }

    isDarkPreferred(){
        return (
            localStorage.getItem("color-mode") == "dark"//check preference
            || (
                !localStorage.getItem("color-mode")     //no preference set
                && window.matchMedia('(prefers-color-scheme: dark)').matches //check os default
            )
        );
    }

    setColorModeIcon(mode){
        if(mode == "dark"){
            console.log("to dark");
            this.iconDark.style.display = "none";
            this.iconLight.style.display = "flex";
        }
        else{
            console.log("to light");
            this.iconLight.style.display = "none";
            this.iconDark.style.display = "flex";
        }
    }

    toggleColorMode(){
        const mode = document.documentElement.getAttribute("color-mode");
    
        if(mode == "light"){
            document.documentElement.setAttribute("color-mode", "dark");
            localStorage.setItem("color-mode", "dark");
            this.setColorModeIcon("dark");
        } 
        else {
            document.documentElement.setAttribute("color-mode", "light");
            localStorage.setItem("color-mode", "light");
            this.setColorModeIcon("light")
        }
    }
}

const themeManager = new ThemeManager();
