function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerButton");
x.onclick = toggleMenu;



document.getElementById("coprightYear").innerHTML = new Date().getFullYear()

document.getElementById("lastUpdated").innerHTML = new Date(document.lastModified).toLocaleString()