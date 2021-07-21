"use strict"

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(() => {
      console.log("Service worker install success.");
      }).catch(() => {
      console.error("Service worker install failed.");
      });
  }
});

class ThemeManager{
  // iconDark;
  // iconLight;
  constructor(){
    if(!window.CSS || !CSS.supports("color", "var(--bg)")) return;  // return if mode toggle not supported

    document.getElementById("color-mode-toggle-button").classList.remove("hidden");
    this.iconDark = document.getElementById("icon-dark");
    this.iconLight = document.getElementById("icon-light");

    let initColorMode = "light";
    if(window.matchMedia){
      initColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const colorScheme = e.matches ? "dark" : "light";
        this.setColorMode(colorScheme);
      });
    } else {
      initColorMode = (localStorage.getItem("color-mode") == "dark") ? "dark" : "light";
    }

    this.setColorMode(initColorMode);
  }

  setColorMode(mode){
    document.documentElement.setAttribute("color-mode", mode);
    this.setColorModeIcon(mode);
    this.setMetaThemeColor();
    localStorage.setItem("color-mode", mode);
  }

  setColorModeIcon(mode){
    if(mode == "dark"){
      this.iconDark.style.display = "none";
      this.iconLight.style.display = "flex";
    }
    else{
      this.iconLight.style.display = "none";
      this.iconDark.style.display = "flex";
    }
  }

  toggleColorMode(){
    const mode = (document.documentElement.getAttribute("color-mode") == "light")? "dark": "light";
    this.setColorMode(mode);
  }

  setMetaThemeColor(){
    document.querySelector('meta[name="theme-color"]').setAttribute(
      'content',
      getComputedStyle(document.documentElement).getPropertyValue('--bg-welcome')
    );
  }
}

class EventManager{
  constructor(){
    this.navbar = document.getElementById("nav-bar");
    this.downArrow = document.getElementById("down-arrow");
    window.addEventListener("scroll", this.onScrollCheckpoints.bind(this));
    this.downArrow.addEventListener("click", this.downArrowDisappear.bind(this));
  }

  onScrollCheckpoints(){
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.navbar.classList.toggle("no-background", scrollTop <= windowHeight);
    this.downArrow.classList.toggle("hidden", scrollTop >= windowHeight/3);
  }

  downArrowDisappear(){
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    window.scrollBy(0, windowHeight*2/3);
  }
}

const themeManager = new ThemeManager();
const eventManager = new EventManager();
