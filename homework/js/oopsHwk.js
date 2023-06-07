class Building {
   constructor(hasWalls,numOfWalls,roofShape) { 
     this.hasWalls = hasWalls;
     this.numOfWalls = numOfWalls;
     this.roofShape = roofShape;
   }

   gethasWalls() {
       return this.hasWalls;
   }

   getnumOfWalls() { 
       return this.numOfWalls;
   }

   getroofOfshape() { 
       return this.roofShape;
   }

    openDoor() { 
        console.log("Opening Building Door");
    };

    closeDoor(){ 
        console.log("Closing Building Door");
    };
}

class Gym extends Building {
   constructor(hasWalls,numOfWalls,roofShape,gymName, hasPool)  { 
        super(hasWalls,numOfWalls,roofShape);
        this.gymName = gymName;
        this.hasPool = hasPool;
    }

    getGymName() { 
        return this.gymName;
    }

    gethasPool() { 
        return this.hasPool;
    }

    closeGym() {
        console.log("Close Gym");
    }

    openGym() { 
        console.log("Open Gym");
    }

}

class Bank extends Building {
    constructor(hasWalls,numOfWalls,roofShape,numOfVault, numOfStaff,name) {
        super(hasWalls,numOfWalls,roofShape);
        this.numOfVault = numOfVault; 
        this.numOfStaff = numOfStaff;
        this.name = name;
    }

    getnumofVault() { 
        return this.numOfVault;
    }

    getnumOfStaff() { 
        return this.numOfStaff;
    
    }

    getName() { 
        return this.name;
    }

    closeBank() { 
        console.log("Close Bank");
    }

    openBank() { 
        console.log("Open Bank");
    }
}

const myGym = new Gym(true, 4, "flat", "City Sports First", true);
console.log(myGym.gethasWalls()); 
console.log(myGym.getnumOfWalls()); 
console.log(myGym.getroofOfshape()); 
console.log(myGym.getGymName());
console.log(myGym.gethasPool()); 
myGym.openDoor(); 
myGym.closeDoor(); 
myGym.openGym(); 
myGym.closeGym(); 

const myBank = new Bank(true, 6, "flat", 2, 20, "Bank Of America");
console.log(myBank.gethasWalls()); 
console.log(myBank.getnumOfWalls()); 
console.log(myBank.getroofOfshape()); 
console.log(myBank.getnumofVault()); 
console.log(myBank.getnumOfStaff()); 
console.log(myBank.getName()); 
myBank.openDoor(); 
myBank.closeDoor(); 
myBank.openBank





