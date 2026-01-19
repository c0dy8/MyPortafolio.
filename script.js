const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropdown-btn");

    button.addEventListener("click", () => {
        dropdowns.forEach(d => {
            if (d !== dropdown) d.classList.remove("active");
        });
        dropdown.classList.toggle("active");
    });
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        dropdowns.forEach(d => d.classList.remove("active"));
    }
});
