class Block{
    constructor(x, y) {

        var options = {
           
            restitution: 0.4,
            friction: 0.005
           
        }

        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display(){
          
        push();
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 30, 40);
        pop();

    }
}