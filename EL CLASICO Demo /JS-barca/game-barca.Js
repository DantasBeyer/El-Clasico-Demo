class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.gameSize = { w: null, h: null };
    this.defendersPos = { x: null, y: null };
    this.defendersSize = { w: null, h: null };
    this.defendersVelocity = null;
    this.playerPos = { x: null, y: null };
    this.playerSize = { w: null, h: null };
    this.player = null;
    this.defenders = null;
    this.background = null;
    this.gameOverElement = document.querySelector(".game-over-barca");
    this.gameWinElement = document.querySelector(".you-Win-barca");
    
    this.animationId = null;

    this.init();
  }
  init() {
    this.setCanvas();
    this.setSize();
    this.startGame();
    this.createPlayer();
    this.createDefenders();
    this.createBackground();
    this.setEventHandlers();
    this.drawAll();
    this.checkCollision();
    
    
  }
  startGame() {
   
    this.background = new Background(this.canvas, this.ctx);
    
  }

  setCanvas() {
    (this.canvas = document.getElementById("my-canvas")),
      (this.ctx = this.canvas.getContext("2d"));
  }
  setSize() {
    /* this.gameSize = { w: window.innerWidth, h: window.innerHeight }; */
    this.gameSize = { w: 800, h: 800 };
    this.canvas.setAttribute("width", this.gameSize.w);
    this.canvas.setAttribute("height", this.gameSize.h);
  }

  createBackground() {
    this.background = new Background(this.canvas, this.ctx);
    this.background.setImage();
  }

  createPlayer() {
    this.player = new Player(this.ctx, 400, 650, 70, 140, this.gameSize);
  }
  createDefenders() {
    this.defenders = new Defenders(this.ctx, 400, 200, 120, 150, this.gameSize);
  }

  drawAll() {
    this.clear();
    this.background.draw();
    this.player.draw();
    this.defenders.draw();
    this.defenders.move();
    this.checkCollision();
    this.checkIfGoal();

    this.animationId = requestAnimationFrame(() => this.drawAll());
  }
  
  // colocar um botao start
  
  // explicacao das regras

  
  
  // deixar as ultimas 2 horas antes do curso comecar para cuidar do design
  // fazer commit apra o gitHub ( NEw Repository)

  setEventHandlers() {
    document.addEventListener("keydown", (event) => {
      const key = event.key;
      key == "ArrowRight" ? this.player.moveRight() : null;
      key == "ArrowLeft" ? this.player.moveLeft() : null;
      key == "ArrowUp" ? this.player.moveUp() : null;
      key == "ArrowDown" ? this.player.moveDown() : null;
    });
  }



  checkIfGoal() {
    let goalX = false;
    let goalY = false;

    if (
      this.player.playerPos.x > 300 &&
      this.player.playerPos.x < 500 - this.player.playerSize.w
    ) {
      goalX = true;
    }
    if (
      this.player.playerPos.y > 5 &&
      this.player.playerPos.y < 150 - this.player.playerSize.w
    ) {
      goalY = true;
    }
    if (goalX && goalY) {
      this.winTheGame(); 
    }
  }
  checkCollision() {
   /*  const playerLeftBound = this.player.playerPos.x;
    const playerRightBound = this.player.playerPos.y + this.player.playerSize.w;
    const playerTopBound = this.player.playerPos.y;
    const playerBottomBound =
      this.player.playerPos.y + this.player.playerSize.h;

    const defendersLeftBound = this.defenders.defendersPos.x;
    const defendersRightBound =
      this.defenders.defendersPos.y + this.defenders.defendersSize.w;
    const defendersTopBound = this.defenders.defendersPos.y;
    const defendersBottomBound =
      this.defenders.defendersPos.y + this.defenders.defendersSize.h;
    let hit = false; */
    const playerLeftBound = this.player.playerPos.y;
    const playerRightBound = this.player.playerPos.y + this.player.playerSize.w;
    const playerTopBound = this.player.playerPos.x;
    const playerBottomBound =
      this.player.playerPos.x + this.player.playerSize.h;

    const defendersLeftBound = this.defenders.defendersPos.y;
    const defendersRightBound =
      this.defenders.defendersPos.x + this.defenders.defendersSize.w;
    const defendersTopBound = this.defenders.defendersPos.x;
    const defendersBottomBound =
      this.defenders.defendersPos.x + this.defenders.defendersSize.h;
    let hit = false;

 
    const hitOnTop =
      defendersBottomBound > playerTopBound &&
      defendersBottomBound < playerTopBound + 1 &&
      defendersLeftBound > playerRightBound < defendersLeftBound +1 ;
    const hitOnBotton =
      defendersTopBound > playerBottomBound &&
      defendersTopBound < playerBottomBound + 1 &&
      defendersRightBound > playerLeftBound < defendersRightBound +1 ;
    const hitOnRight =
      defendersLeftBound > playerRightBound &&
      defendersLeftBound < playerRightBound + 1 &&
      defendersBottomBound > playerTopBound < defendersBottomBound +1 ;
    const hitOnLeft =
      defendersRightBound > playerLeftBound &&
      defendersRightBound < playerLeftBound + 1  &&
      defendersTopBound > playerBottomBound < defendersTopBound +1 ;

    // continuar com o colision
    // design
    //start and game over 

    if (hitOnTop) {
      this.defenders.defendersVelocity.y *= -1;
      hit = true;
    }
    if (hitOnBotton) {
      this.defenders.defendersVelocity.y *= -1;
      hit = true;
    }
    if (hitOnRight) {
      this.defenders.defendersVelocity.y *= -1;
      hit = true;
    }
    if (hitOnLeft) {
      this.defenders.defendersVelocity.y *= -1;
      hit = true;
    }
    if (hit) {
      this.lostTheGame();
    } 
  }

    lostTheGame() { 
      
      this.gameOverElement.classList.remove("hidden");  
      stopTheGame()
  } 

    winTheGame(){
      
      this.gameWinElement.classList.remove("hidden2")
      stopTheGame()
    }

 

  stopTheGame() {
    cancelAnimationFrame(this.animationId);
     
  }

  clear() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
  }
}
