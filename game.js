const body = document.querySelector("body");
const canvas = document.querySelector("canvas#game");
const Menu = document.querySelector(".main_menu");
var ctx = canvas.getContext("2d");


const newGame = () =>{
    setTimeout(() => {
        Menu.classList.add("d-none")
    }, 2500);
    document.querySelector("img").classList.add("flynow");
}


