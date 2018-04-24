
let speed = 1;

// Enemies our player must avoid
class Enemy {
	constructor(x,y) {
		this.x = x;
		this.y =y;
		this.dt = Math.floor(Math.random() * 2 + 1) * speed;
        this.collision = false;
	// The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
		this.sprite = 'images/enemy-bug.png';
		
		// Update the enemy's position, required method for game
		update(){
	
	this.x += speed * this.dt;
}
// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
