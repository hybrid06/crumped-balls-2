class Ball {
constructor(){
    var options={
        restitution:1,
        isStatic:false,
        friction:0.5,
        density:1.4
      }
      
      this.body=Bodies.circle(180,200,25,options);
      World.add(world,this.body);
      this.image = loadImage("paper.png");
}
display(){
    ellipseMode(RADIUS);
    image(this.image,this.body.position.x,this.body.position.y,40,40);

}


}