export default class VIPTicket {
  constructor(price, ownerName) {
    this.ticketNumber = Math.floor(Math.random() * 1000);
    this.price = price;
    this.ownerName = ownerName;
    // this.benefitsList = ["free alcohol", "free food", "hot towels"];
  }
}
