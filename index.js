//see all passengers related to driver//
//driver become srleated to passenger when he takes a single trip//
//one passenger associated with trip//

let driverId = 0;
let passengerId = 0;
let store = {drivers: [], passengers: [], trips: []};

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
  trips() {
      return store.trips.filter(trip => trip.driverId === this.id)
  }
  passengers() {
    return this.trips().map((trip) => trip.passenger());
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passenderId
    this.name = name;
    store.drivers.push(this);
    
  }

}

class Trip {

}
