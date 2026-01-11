import Flight from "./classFlight.js";
const flight1 = new Flight("flight1", "1", "israel 1", 100, 200, 300);
const flight2 = new Flight("flight2", "2", "israel 2", 200, 300, 100);
const flight3 = new Flight("flight2", "3", "israel 3", 300, 100, 200);
export class Airport {
  constructor() {
    this.flights = [flight1, flight2, flight3];
  }
}
