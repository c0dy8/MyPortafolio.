const robinBtn = document.getElementById("robinBtn");
const riwiBtn = document.getElementById("riwiBtn");

const robinMenu = document.getElementById("robinMenu");
const riwiMenu = document.getElementById("riwiMenu");

robinBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    robinMenu.classList.toggle("active");
    riwiMenu.classList.remove("active");
});

riwiBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    riwiMenu.classList.toggle("active");
    robinMenu.classList.remove("active");
});

document.addEventListener("click", () => {
    robinMenu.classList.remove("active");
    riwiMenu.classList.remove("active");
});
