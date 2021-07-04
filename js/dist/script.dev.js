"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener("load", function () {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(function () {
      console.log("Service worker install success.");
    })["catch"](function () {
      console.error("Service worker install failed.");
    });
  }
});

var ThemeManager =
/*#__PURE__*/
function () {
  function ThemeManager() {
    _classCallCheck(this, ThemeManager);

    // return if mode toggle not supported
    if (!window.CSS || !CSS.supports("color", "var(--bg)")) return;
    document.getElementById("color-mode-toggle-button").classList.remove("hidden");
    this.iconDark = document.getElementById("icon-dark");
    this.iconLight = document.getElementById("icon-light");

    if (this.isDarkPreferred()) {
      document.documentElement.setAttribute("color-mode", "dark");
      this.setColorModeIcon("dark");
    } else {
      document.documentElement.setAttribute("color-mode", "light");
      this.setColorModeIcon("light");
    }

    this.setMetaThemeColor();
  }

  _createClass(ThemeManager, [{
    key: "isDarkPreferred",
    value: function isDarkPreferred() {
      return localStorage.getItem("color-mode") == "dark" //check preference
      || !localStorage.getItem("color-mode") //no preference set
      && window.matchMedia('(prefers-color-scheme: dark)').matches //check os default
      ;
    }
  }, {
    key: "setColorModeIcon",
    value: function setColorModeIcon(mode) {
      if (mode == "dark") {
        this.iconDark.style.display = "none";
        this.iconLight.style.display = "flex";
      } else {
        this.iconLight.style.display = "none";
        this.iconDark.style.display = "flex";
      }
    }
  }, {
    key: "toggleColorMode",
    value: function toggleColorMode() {
      var mode = document.documentElement.getAttribute("color-mode");

      if (mode == "light") {
        document.documentElement.setAttribute("color-mode", "dark");
        localStorage.setItem("color-mode", "dark");
        this.setColorModeIcon("dark");
      } else {
        document.documentElement.setAttribute("color-mode", "light");
        localStorage.setItem("color-mode", "light");
        this.setColorModeIcon("light");
      }

      this.setMetaThemeColor();
    }
  }, {
    key: "setMetaThemeColor",
    value: function setMetaThemeColor() {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--bg-welcome'));
    }
  }]);

  return ThemeManager;
}();

var EventManager =
/*#__PURE__*/
function () {
  function EventManager() {
    _classCallCheck(this, EventManager);

    this.navbar = document.getElementById("nav-bar");
    this.downArrow = document.getElementById("down-arrow");
    window.addEventListener("scroll", this.onScrollCheckpoints.bind(this));
    this.downArrow.addEventListener("click", this.downArrowDisappear.bind(this));
  }

  _createClass(EventManager, [{
    key: "onScrollCheckpoints",
    value: function onScrollCheckpoints() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      this.navbar.classList.toggle("no-background", scrollTop <= windowHeight);
      this.downArrow.classList.toggle("hidden", scrollTop >= windowHeight / 3);
    }
  }, {
    key: "downArrowDisappear",
    value: function downArrowDisappear() {
      var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      window.scrollBy(0, windowHeight * 2 / 3);
    }
  }]);

  return EventManager;
}();

var themeManager = new ThemeManager();
var eventManager = new EventManager();