class CannonBall{
    constructor(x,y){
        var options = {
            restitution : 0.4,
            friction : 1.0,
            density : 1.0,
            isStatic: true
        }
        this.r = 20;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("../assets/cannonball.png");

        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        //console.log(this.body);
        console.log(this.body.velocity.x+ "," + this.body.velocity.y)
        console.log(this.body.position.x+ "," + this.body.position.y)
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,this.r,this.r);
        pop();
    }

    shoot(){
        Matter.Body.setVelocity(this.body,{x: 50,y :-30 });
    }
}