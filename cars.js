class Vehicle{

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;

    }

    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);

    }
}

//Extends class to show number of doors 
class Cars extends Vehicle { 
    constructor(make, model, year, doors){
        super(make, model, year); //Calls information from vehicle class
        this.doors = doors;

    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);

    }

}

let myCar = new Cars('VW', 'Golf', 2011, 5);
myCar.Information();