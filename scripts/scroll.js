window.addEventListener("scroll", function () {
    if (window.scrollY > (window.screen.height * 0.70)) {
        document.querySelector(".container").classList.add("black")
    } else {
        document.querySelector(".container").classList.remove("black")
    }
})