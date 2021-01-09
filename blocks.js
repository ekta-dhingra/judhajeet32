class Blocks {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
   
        

    display(){
      //console.log(this.body.speed);
      if(this.body.speed <5){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("lightpink")
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
     
      
      pop();
      
    }
  }
  score(){
    if(this.visibility<0 && this.Visiblity>-105){
      score++
    }
}
    
}
  
 