class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.4,
        'density':20,
         //modify the value of isStatic so that box objects can move
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("smiley cube.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //rectMode(CENTER);

    strokeWeight(4);
    stroke("black");
    imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
    //fill("red");
    //rect(0, 0, this.width, this.height);
    pop();
  }
}
