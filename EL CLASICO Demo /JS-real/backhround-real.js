class Background{
    constructor ( canvas,ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.image = null;
        this.y = 0; 
        

    }
    setImage(){
        this.image = new Image ();
        this.image.src = '/img/Background-Times/Footbal pich/Football Pitch2.jpeg'
    }
 draw(){
    
        this.ctx.drawImage(
            this.image,
            0, 
            this.y, 
            this.canvas.width, 
            this.canvas.height
        )};
    

}