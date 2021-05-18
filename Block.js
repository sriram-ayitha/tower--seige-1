class Block{
    constructor(x,y,width,height){
        var options={
            'isStatic':false,
            'restitution':1.0,
            'friction':0.01
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;



    }
    display(){
        if(this.body.speed < 3){
        rectMode(CENTER)
        stroke("green")
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        }
        else{
          World.remove(world, this.body);
          push();
          this.visiblity = this.visiblity - 5;
          tint(255,this.visiblity);
          pop();
        }
      }
         attach(body){
          
          this.block.bodyA=body                        
        }
      }
