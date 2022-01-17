class Slingshot{
    constructor(Body1,Point2){
        var ops={
            bodyA:Body1,
            pointB:Point2,length:10,stiffnes:0.04
        }
        this.sling=Constraint.create(ops);
        World.add(world,this.sling)
        this.Point2=Point2;
    }
    Display(){
        if (this.sling.bodyA){
            var point1=this.sling.bodyA.position;
            var point2=this.Point2;
            push();
            strokeWeight(4)
    
            line(point1.x,point1.y,point2.x,point2.y)
            pop();
        }
        
        
        
    }
    fly(){
        this.sling.bodyA=null;
    
    }
    attach(b){
        this.sling.bodyA=b;
    }
}