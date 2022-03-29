 
    const pacMen = [];

    function setToRandom(scale) {
        return {
            x: Math.random() * scale,
            y: Math.random() * scale
        }
    }
    // Factory to make a PacMan 
    function makePac() {
        // returns an object with values scaled {x: 33, y: 21}
        let velocity = setToRandom(10);
        let position = setToRandom(200);
        // Add image to div id = game
        let game = document.getElementById('game');
        let newimg = document.createElement('img');
        newimg.style.position = 'absolute';
        newimg.src = 'images/PacMan1.png';
        newimg.width = 100;
        newimg.style.left = position.x;
        newimg.style.top = position.y;
        game.appendChild(newimg);
        // new style of creating an object
        return {
            position,
            velocity,
            newimg
        }
    }

    function update() {
        //loop over pacmen array and move each one and move image in DOM
        pacMen.forEach((pac) => {
            checkCollisions(pac)
            pac.position.x += pac.velocity.x;
            pac.position.y += pac.velocity.y;

            pac.newimg.style.left = pac.position.x;
            pac.newimg.style.top = pac.position.y;
        })
        setTimeout(update, 20);
    }

    function checkCollisions(pac) {
        if (pac.position.x + pac.velocity.x + pac.newimg.width > window.innerWidth ||
            pac.position.x + pac.velocity.x < 0) pac.velocity.x = -pac.velocity.x;
        if (pac.position.y + pac.velocity.y + pac.newimg.height > window.innerHeight ||
            pac.position.y + pac.velocity.y < 0) pac.velocity.y = -pac.velocity.y;
    }

    function makeOne() {
        pacMen.push(makePac()); // add a new PacMan
    }