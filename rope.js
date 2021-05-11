class Rope{
    constructor(bodyA,pointB,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
      var options = {
          bodyA:bodyA,
        //   bodyB:bodyB,
          pointB:{x:this.offsetX, y: this.offsetY},
          stiffnes:0.01,
          length:500
      }
      this.rope = Constraint.create(options)
      World.add(world, this.rope);
    }
    display(){
      var pointA = this.rope.bodyA.position
      var bodyB = this.rope.pointB;
      strokeWeight(4);
      stroke("red");
      line(pointA.x,pointA.y,bodyB.x,bodyB.y)
    }
  };