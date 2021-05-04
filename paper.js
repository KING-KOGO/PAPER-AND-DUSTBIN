class Paper{

    constructor(x,y,r){
      var options={
          restitution:0.3,
          density:1.2,
          friction:0,
          isStatic:false
       }

     this.body=Bodies.circle(x,y,r,options)
     World.add(world,this.body)
     this.image=loadImage("paper.png")
     this.radius=r
    }
    display(){
      var pos=this.body.position
      push()
      translate(pos.x,pos.y)
      rotate(this.body.angle) 
      imageMode(CENTER)
      image(this.image,0,0,this.radius+50,this.radius+50)
      pop()


    }

}