class Cannon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.cannonBaseImg = loadImage("../assets/cannon_base.png");
        this.cannonImg = loadImage("../assets/CANON.png");
    }
    display(){
       if(keyIsDown(RIGHT_ARROW) && this.angle < 0.63){
            this.angle += 0.02;
        }
        if(keyIsDown(LEFT_ARROW) && this.angle > -0.73){
            this.angle -= 0.02;
        }
        //console.log(this.angle);
        push();
        translate(this.x+65,160);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cannonImg,0, 0,90,90);  
        pop();
        image(this.cannonBaseImg,this.x,this.y,this.width,this.height);
    }
}