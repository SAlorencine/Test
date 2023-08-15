class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.1,
            length : 5
        }
        this.barco = loadImage("Barco.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fish(){
        this.sling.pointB = null;
    }

    back(point){
        this.sling.pointB = point;
    }

    display(){
        image(this.barco, 120, 120, 150, 150);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            else{
                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x + 30, pointB.y - 3);
            }
           
            
            pop();
        }
    }
    
}