import Ticket from "../tickets/RegularTicket.js";
import VIPTicket from "../tickets/VIPTicket.js";
export default class regular {
  constructor(
    name,
    ID_number,
    amountOfMoney,
    workPlace,
    KnowsAnAirportEmployee
  ) {
    this.name = name;
    this.ID_number = ID_number;
    this.amountOfMoney = amountOfMoney;
    this.workPlace = workPlace;
    this.KnowsAnAirportEmployee = KnowsAnAirportEmployee;
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
      let discount = 0;
      if (this.KnowsAnAirportEmployee) {
        discount = flight.regularTicketPrice * 0.8;
      }
      this.amountOfMoney -= amount * discount;
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
      let discount = 0;
      if (this.KnowsAnAirportEmployee) {
        discount = flight.regularTicketPrice * 0.9;
      }
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
