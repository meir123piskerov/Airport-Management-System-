import { Airport } from "./Flight/airport.js";
import student from "./passenger/student.js";
import regular from "./passenger/regular.js";

const NewAirport = new Airport();
const studentMeir = new student("yosi", 123, 10000, "8200");
const regularIdan = new regular("meir", 132, 250000, "tami 4", true);
regularIdan.buyRegularTicket(NewAirport.flights[1], 50);
studentMeir.buyRegularTicket(NewAirport.flights[1], 50);
