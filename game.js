const body = document.querySelector("body");
const canvas = document.querySelector("canvas#game");
const Menu = document.querySelector(".main_menu");
var ctx = canvas.getContext("2d");
const mainMap = new Image();
// const mainMap = document.querySelector("#main_map");

const newGame = () =>{
    document.querySelector("#plane").classList.add("flynow");
    setTimeout(() => {
        loadGame(); 
    }, 150);
}

newGame();

const loadGame = () => {
    Menu.classList.add("d-none");
    canvas.classList.remove("d-none");
    let cX = window.innerWidth;
    let cY = window.innerHeight;
    console.log(cX, cY)
    // Make sure the image is loaded before drawing
    mainMap.onload = () => {
        ctx.drawImage(mainMap, 0, 0, 300, 150);
    }
    mainMap.src="/assets/images/basicMap.png"
};
