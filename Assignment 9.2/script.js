class Airplane  {
        constructor(name,seatingcapacity, maxspeed) {
                this.name = name;
                this.seatingcapacity = seatingcapacity;
                this.maxspeed = maxspeed;
        }
    
        print() { //Printing the object values
                console.log("Model : " + this.name + " seating " + this.seatingcapacity +  " max speed " + this.maxspeed + " km/hr ");
            }

        printaveragespeed() {
                console.log("Airplane " + this.name + " averagespeed " + this.averagespeed);
        }

        increaseSeatingcapacity(incseatingcapacity) {//Increasing the airplane objects speed
           this.seatingcapacity = this.seatingcapacity + incseatingcapacity;
        }

        deletespeed() { //Deleting the maximumspeed for all objects
                this.maxspeed = 0;
        }

        setaveragespeed(averagespeed) { //Adding average speed
                this.averagespeed = averagespeed;
        }
}
console.log("create 3 Airplane objects and call their print methods");
console.log("-------------------------------------------------------");
// Displaying the properties of the airplane
        var Boeing = new Airplane("Boeing 222", 200, 100);
        Boeing.print();
        var firefighter = new Airplane("firefighter", 400, 110);
        firefighter.print();
        var helicopter = new Airplane("helicopter", 500, 120);
        helicopter.print();
console.log("-------------------------------------------------------");

console.log("increase seating capacity for all airplane objects by 10 / deleting maximum speed and adding average speed ");
console.log("-------------------------------------------------------");
//increase seating capacity for all airplane objects by 10 
Boeing.increaseSeatingcapacity(10);
//Boeing.print();
firefighter.increaseSeatingcapacity(10);
//firefighter.print();
helicopter.increaseSeatingcapacity(10);

//console.log("-------------------------------------------------------");
Boeing.deletespeed();
//Boeing.print();
firefighter.deletespeed();
//firefighter.print();
helicopter.deletespeed();
//helicopter.print();
//console.log("-------------------------------------------------------");
Boeing.setaveragespeed(600);
Boeing.printaveragespeed();
firefighter.setaveragespeed(600);
firefighter.printaveragespeed();
helicopter.setaveragespeed(600);
helicopter.printaveragespeed();