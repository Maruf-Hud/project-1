class Component{
    constructor(name, x, y, width, height) {
        this.name = name;
        this.position= {
            x: x,
            y: y,
            width: width,
            height: height
        }
    }
    
    moveUp(){
        this.position.y--;
    }
    moveDown(){
        this.position.y++;
    }
    moveLeft(){
        this.position.x--;
    }
    moveRight(){
        this.position.x++;
    } 
}

export default Component;
