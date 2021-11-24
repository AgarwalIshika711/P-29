class Pentagon{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            density:1,
            
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("polygon.png");

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
       
        translate(pos.x,pos.y);       
    
        imageMode(CENTER);
        image(this.image,0,0, this.radius, this.radius);
        
        pop();
    }
}