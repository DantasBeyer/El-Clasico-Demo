class Defenders {
    constructor(ctx, positionX, positionY, widht, height, gameSize){
        this.ctx = ctx
        this.defendersPos =  {x: positionX, y: positionY};
        this.defendersSize = {w: widht, h: height};
        this.defendersVelocity = { x: null, y: null};
        this.image = null;
        this.gameSize = gameSize; 
        this.init();
    }
    init(){
        this.image = new Image()
        this.image.src = "/img/Players/Real/Sergio Ramos.png";
        this.defendersVelocity = {
			x: this.getRandVelocity(),
			y: this.getRandVelocity(),
        };
    }

     getRandVelocity(){
        const velocity = [-4,4];
        return velocity[ Math.floor(Math.random()* 2)]* (Math.random()* 2);
    } 

    draw(){
        this.ctx.drawImage(
            this.image,
            this.defendersPos.x,
            this.defendersPos.y,
            this.defendersSize.w,
            this.defendersSize.h,
        );

    }
	  move() {
		this.defendersPos.x += this.defendersVelocity.x;
		this.defendersPos.y += this.defendersVelocity.y;
		this.checkCollision();
	    } 


        checkCollision() {
           
            if (
                this.defendersPos.x + this.defendersSize.w > this.gameSize.w ||
                this.defendersPos.x  < 0         
                ){
                    this.defendersVelocity.x *= -1;
                }
    
            if (
                this.defendersPos.y  < 0 ||
                this.defendersPos.y + this.defendersSize.h > this.gameSize.h
                ){
                    this.defendersVelocity.y *= -1;
                }
           
        };

  
 
};