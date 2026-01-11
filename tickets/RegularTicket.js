export default class Ticket {
  constructor(price, ownerName) {
    this.ticketNumber = Math.floor(Math.random() * 10000);
    this.price = price;
    this.ownerName = ownerName;
  }
}
