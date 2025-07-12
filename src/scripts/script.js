const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
};
