class Player {
    constructor(ctx, positionX, positionY, widht, height, gameSize){
        this.ctx = ctx
        this.playerPos =  {x: positionX, y: positionY};
        this.playerSize = {w: widht, h: height};
        this.image = null;
        this.gameSize = gameSize;
        this.init();
    }
    init(){
        this.image = new Image()
        this.image.src = "/img/Players/Real/CR:.png";
    }

    draw(){
        this.ctx.drawImage(
            this.image,
            this.playerPos.x,
            this.playerPos.y,
            this.playerSize.w,
            this.playerSize.h,
        );

    }

    moveLeft(){
        this.playerPos.x -= 50;

    }
    moveRight(){
        this.playerPos.x += 50;
    }
    moveUp(){
        this.playerPos.y -= 50;

    }
    moveDown(){
        this.playerPos.y += 50;
    }
}
