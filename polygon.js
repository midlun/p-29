class Polygon extends BaseClass {
    constructor(bodyA){
      super(bodyA,y,50,50);
      polygon = Bodies.circle(50,200,20);
      World.add(world, polygon);

      slingshot = new Slingshot(this.polygon,{x:100, y:200});
    }
  
    display() {
        imageMode(CENTER)
        image(polygon_img, polygon.position.x, polygon.position.y, 40,40);
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }