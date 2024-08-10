function openSlidebar() {
    document.getElementById("slidebar").style.left = "0";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeSlidebar() {
    document.getElementById("slidebar").style.left = "-250px";
    document.getElementById("main").style.marginLeft = "0";
}
