(function(){
    'use strict';

    class Vehicle{
        constructor(color){
            this.color = color;
            this.speed = 0;
        }
        go(speed){
            this.speed = speed;
            console.log(`Now going ${speed}MPR...`);
            }
        print(){
            console.log(`The vehicle is ${this.color} and going ${this.speed}MPR`);
        }
    }

    class Plane extends Vehicle{
        constructor(color){
            super(color);
        }
        go(speed){
            this.speed = speed;
            console.log(`Now flying ${speed}MPR...`);
        }
    }
   
    
    
    const tesla = new Vehicle("black");
    tesla.go(50);
    tesla.print();

    const jet = new Plane("white");
    jet.go(75);
    jet.print();
}());