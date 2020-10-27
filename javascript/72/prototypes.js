(function(){
    'use strict';

    function Vehicle(color){
        this.color = color;
        this.speed = 0;
    }

    Vehicle.prototype.go = function(speed){
        this.speed = speed;
        console.log(`Now going ${speed}MPR...`);
    };

    Vehicle.prototype.print = function(){
        console.log(`The vehicle is ${this.color} and going ${this.speed}MPR`);
    };

    function Plane(color){
        this.color = color;
        this.speed = 0;
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function(speed){
        this.speed = speed;
        console.log(`Now flying ${speed}MPR...`);
    };
    
    const tesla = new Vehicle("black");
    tesla.go(50);
    tesla.print();

    const jet = new Plane("white");
    jet.go(75);
    jet.print();
}());