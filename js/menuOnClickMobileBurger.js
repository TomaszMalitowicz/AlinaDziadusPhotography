/* czysty JS */

const burger = document.querySelector(".burger");
const activeElement = document.querySelectorAll(".active")
const menuButtons = document.querySelectorAll("aside nav a");
const menuBtnWelcome = document.querySelector(".welcome");
const menuBtnMe = document.querySelector(".me");
const menuBtnPortfolio = document.querySelector(".portfolio");
const menuBtnRerference = document.querySelector(".offer");
const menuBtnContact = document.querySelector(".contact");
// console.log(activeElement)
// console.log(menuButtons)
// console.log(menuBtnPortfolio)
// console.log(burger)
// burger.addEventListener("click", function () {
//     for (let i = 0; i < activeElement.length; i++) {
//         activeElement[i].classList.toggle("show")
//     }
// })
const showHideMenu = function () {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("show")
    }
}
burger.addEventListener("click", showHideMenu)
menuBtnWelcome.addEventListener("click", showHideMenu);
menuBtnMe.addEventListener("click", showHideMenu);
menuBtnPortfolio.addEventListener("click", showHideMenu);
menuBtnRerference.addEventListener("click", showHideMenu);
menuBtnContact.addEventListener("click", showHideMenu);