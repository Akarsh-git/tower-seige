class Box {
  constructor(x, y, width, height,colour) {
    var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':0.5,
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.colour=colour;
    World.add(world, this.body);
    this.visibility=10;
  }
  display(){
    if(this.body.speed<5){
     var pos =this.body.position;
      var angle=this.body.angle;
      fill (this.colour);
      rectMode(CENTER);
      push ();
      translate(pos.x,pos.y);
      rotate(angle);
      
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      this.visibility--;
      World.remove(world,this.body)
    }
   
  }
}
