
// menuList.style.display == "none"
// function togglemenu() {
//     if(menuList.style.display == "none") {
//        menuList.style.display = "block";
//     }
//     else{
//         menuList.style.display = "none";
//     }
// }
function showNav() {
    var menuList = document.getElementById("menulist");
    menuList.classList.toggle("show");
}
