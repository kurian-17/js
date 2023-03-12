const toggleBar = document.getElementById("nav-bars")
const sideBar  = document.querySelector(".sidebar")
const closeBtn = document.getElementById("close-icon")

toggleBar.addEventListener("click", () => {
    sideBar.classList.toggle("hidden")
})

closeBtn.addEventListener("click", () => {
    sideBar.classList.toggle("hidden")

})