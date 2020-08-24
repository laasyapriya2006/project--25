class Dustbin{
    constructor(x,y,width,height){
        var dustbin_options = {
            isStatic: true
        };
        this.body = Bodies.rectangle(x,y,width,height,dustbin_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbingreen.png")

        World.add(world,this.body);
    }

    display(){
      var pos =this.body.position;  
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}