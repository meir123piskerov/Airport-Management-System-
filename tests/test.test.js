import test from "node:test";
import assert from "node:assert/strict";
import { Airport } from "../Flight/airport.js";
import student from "../passenger/student.js";

const NewAirport = new Airport();
const studentMeir = new student("meir", 32423, 10, "8200");
studentMeir.buyRegularTicket(NewAirport.flights[1]);

test("not enof money", () => {
  assert.strictEqual(
    studentMeir.buyRegularTicket(NewAirport.flights[1]),
    false
  );
});
test("match?", assert.deepStrictEqual(NewAirport.flights[1]), "meir");
