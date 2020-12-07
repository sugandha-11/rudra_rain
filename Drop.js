class Drops{
    constructor(x,y){
        var options ={
            isStatic:false,
            friction:0.1,
            density:0.5
        }
        
        this.body= Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;

    ellipse(this.body.position.x, this.body.position.y, this.radius,this.radius)               
    fill("blue");

    }
}

