class Throw{
    constructor(bodyA,pointB){
this.pointB=pointB
this.bodyA=bodyA
this.throw=Constraint.create({bodyA:bodyA,pointB:pointB,stiffness:0.01})
World.add(world,this.throw)
    }
    display(){

    }
    fly(){
        this.throw.bodyA= null;
    }
}