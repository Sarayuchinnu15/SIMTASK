const body = document.querySelector("body");
const first = document.querySelector(".first");
const second = document.querySelector(".second");

function color() {
    body.style.background = `linear-gradient(to right, ${first.value}, ${second.value})`
}

first.addEventListener("input", color);
second.addEventListener("input", color);