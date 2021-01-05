class box
{

    constructor(x,y,width,height)
    {  
      var box_prop =
      {
        'restitution': 0.9,
        'friction': 0.5,
        'density': 1.5,
      } 

      this.body = Bodies.rectangle(x,y,width,height,box_prop); 
      World.add(world,this.body);
      this.width = width;
      this.height = height;
    }
    
    show()
    {
      var pos = this.body.position;
      var ang = this.body.angle;

      push();
      
      translate(pos.x,pos.y)
      rotate(ang);

      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
}