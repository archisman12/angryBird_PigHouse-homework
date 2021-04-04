class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            //center of the bird.... back of the bird 
            var pointA = this.sling.bodyA.position;
            //point on canvas  ..point on catapult
            var pointB = this.pointB;
            push();
            //left side 
            if(pointA.x<220){
            stroke(48,22,8);
            strokeWeight(7);
            line(pointA.x-25, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x-25,pointA.y-10,15,30);
            }
            else {
                
            strokeWeight(3);
            line(pointA.x+25, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }

        }
        pop();
        image(this.sling1,150,574)
        image(this.sling2,120,574)
    
        

    }
    
}