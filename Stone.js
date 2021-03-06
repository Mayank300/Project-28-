// class Stone extends BaseClass {
//   constructor(x,y){
//     super(x,y,50,50);
//     this.image = loadImage("sprites/stone.png");
//   }

//   display() {    
//     super.display();
//   }
// }

 
class Stone{
  constructor(x,y,radius){
    this.body = Bodies.circle(x, y, radius,);
    this.radius = radius;
    this.image = loadImage("sprites/stone.png");
    World.add(world, this.body); 
  }

  display() {  
    imageMode(CENTER);
    //image(this.image, this.body.position.x, this.body.position.y, this.radius+2, this.radius+2);
    image(this.image, this.body.position.x, this.body.position.y, this.radius*2, this.radius*2); 

  }
}