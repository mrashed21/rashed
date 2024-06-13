const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.getElementById("hamburger");
const menuLinks = document.querySelectorAll("#hamburger ul li a");

open.addEventListener("click", () => {
  menu.classList.remove("hidden");
  open.classList.add("hidden");
});

close.addEventListener("click", () => {
  menu.classList.add("hidden");
  open.classList.remove("hidden");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    open.classList.remove("hidden");
  });
});

/* skills section*/
/* html*/
const htmlNumber = document.getElementById("html");
let htmlCounter = 0;
setInterval(() => {
  if (htmlCounter === 90) {
    clearInterval();
  } else {
    htmlCounter += 1;
    htmlNumber.innerHTML = htmlCounter + "%";
  }
}, 35);
/* html*/
const cssNumber = document.getElementById("css");
let cssCounter = 0;
setInterval(() => {
  if (cssCounter === 80) {
    clearInterval();
  } else {
    cssCounter += 1;
    cssNumber.innerHTML = cssCounter + "%";
  }
}, 35);
/* html*/
const tailwindNumber = document.getElementById("tailwind");
let tailwindCounter = 0;
setInterval(() => {
  if (tailwindCounter === 75) {
    clearInterval();
  } else {
    tailwindCounter += 1;
    tailwindNumber.innerHTML = tailwindCounter + "%";
  }
}, 35);
/* html*/
const photoshopNumber = document.getElementById("photoshop");
let photoshopCounter = 0;
setInterval(() => {
  if (photoshopCounter === 55) {
    clearInterval();
  } else {
    photoshopCounter += 1;
    photoshopNumber.innerHTML = photoshopCounter + "%";
  }
}, 35);
/* html*/
const figmaNumber = document.getElementById("figma");
let figmaCounter = 0;
setInterval(() => {
  if (figmaCounter === 65) {
    clearInterval();
  } else {
    figmaCounter += 1;
    figmaNumber.innerHTML = figmaCounter + "%";
  }
}, 35);
/* html*/
const gitNumber = document.getElementById("git");
let gitCounter = 0;
setInterval(() => {
  if (gitCounter === 85) {
    clearInterval();
  } else {
    gitCounter += 1;
    gitNumber.innerHTML = gitCounter + "%";
  }
}, 35);
/* html*/
const javaScriptNumber = document.getElementById("javaScript");
let javaScriptCounter = 0;
setInterval(() => {
  if (javaScriptCounter === 60) {
    clearInterval();
  } else {
    javaScriptCounter += 1;
    javaScriptNumber.innerHTML = javaScriptCounter + "%";
  }
}, 35);
