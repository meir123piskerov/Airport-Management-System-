import Ticket from "../tickets/RegularTicket.js";
import VIPTicket from "../tickets/VIPTicket.js";
export default class student {
  constructor(name, ID_number, amountOfMoney, School) {
    this.name = name;
    this.ID_number = ID_number;
    this.amountOfMoney = amountOfMoney;
    this.School = School;
  }
  buyRegularTicket(flight, amount) {
    if (flight.regularTicketPrice > this.amountOfMoney) {
      console.log("not enof money to buy a ticket");

      return false;
    }
    if (
      amount <
      flight.maximumNumberOfPassengers * 0.9 - flight.ticketsList.length
    ) {
      let studentPrice = flight.price * 0.9;
      this.amountOfMoney -= amount * studentPrice;
      flight.maximumNumberOfPassengers -= amount;
      for (
        let i = 0;
        i < flight.maximumNumberOfPassengers * 0.9 - flight.ticketsList.length;
        i++
      ) {
        const ticket = new Ticket(flight.regularTicketPrice, this.name);
        flight.ticketsList.push(ticket);
        console.log("ticket success bout");
      }
    } else {
      return `there is not enof regular tickets`;
    }
  }
  buyVIPTicket(flight, amount) {
    if (flight.vipTicketPrice > this.amountOfMoney) {
      console.log("not enof money to buy vip");

      return false;
    }
    if (
      amount <
      flight.maximumNumberOfPassengers * 0.1 - flight.ticketsList.length
    ) {
      this.amountOfMoney -= amount * vipTicketPrice;
      flight.maximumNumberOfPassengers -= amount;
      for (
        let i = 0;
        i < flight.maximumNumberOfPassengers * 0.1 - flight.ticketsList.length;
        i++
      ) {
        const ticket = new VIPTicket(flight.vipTicketPrice, this.name);
        flight.ticketsList.push(ticket);
        console.log("ticket success bout");
      }
    } else {
      return `there is not enof tickets`;
    }
  }
}
