
let speed = 1;
let enemyNumber=0;
const posY = [60, 150, 230];
const posX = [-100,-200,-300,-400,-500];
// Enemies our player must avoid
class Enemy {
	constructor(x,y) {
		this.x = x;
		this.y =y;
		this.dt = Math.floor(Math.random() * 2 + 1) * speed;
        this.collision = false;		
		this.w = 101;
		this.h = 171;
	// The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
		this.sprite = 'images/enemy-bug.png';
	}
		// Update the enemy's position, required method for game
		update(){
		this.isCollision();
		this.isCollisionEnemy();
		this.x += speed * this.dt;
	//This condition checks when enemy is out of board 
        if (this.x >= 520) {
			this.y =posY[enemyNumber];
			this.x = posX[enemyNumber];
			this.dt = Math.floor(Math.random() * 2 + 1) * speed;
			enemyNumber++;
			if (enemyNumber ===3) {
				enemyNumber =0;
			}
		 
		}
				
									
			
			
}
// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// Axis-Aligned Bounding Box where width = 70 px and height = 60 px
isCollision(){
	if (this.x <player.x + 70 &&
   this.x + 70 > player.x &&
   this.y < player.y + 60 &&
   60 + this.y > player.y) {
    this.dt =0;// collision detected!
	this.collision = true;
}
}
//prevent collision of enemies
isCollisionEnemy(){
	allEnemies.forEach(enemy => {
if (enemy.x +20< this.x + this.w && enemy.x + enemy.w +20 > this.x && this.y === enemy.y) {
	
	this.dt = enemy.dt;
            }
			
   
   
});
}

}
	


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
	constructor(x,y){
		this.x = x;
		this.y = y;		
		this.avatar ='images/char-boy.png';
	}
	update() {
		this.render();
	}
	 render() {
        ctx.drawImage(Resources.get(this.avatar), this.x, this.y);
    }
	handleInput(key){
		switch (key) {
			case 'left':
			if (this.x >0) {
				this.x -= 100;
			}
			break;
			case 'right':
			if (this.x <400) {
				this.x += 100;
			}
			break;
			case 'up':
			if (this.y >0) {
				this.y -= 90;
			}
			break;
			case 'down':
			if (this.y <400) {
				this.y += 90;
			}
			break;
		}
	}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemy1 = new Enemy(-100, 60);
const enemy2 = new Enemy(-150, 145);
const enemy3 = new Enemy(-100, 230);
const enemy4 = new Enemy(-290, 60);
const enemy5 = new Enemy(-350, 145);
const enemy6 = new Enemy(-400, 230);
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
const player = new Player(200,400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
