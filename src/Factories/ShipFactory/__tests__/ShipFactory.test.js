import { renderHook, act } from "@testing-library/react-hooks";
import ShipFactory from "../ShipFactory";

it("works", () => {
  expect(1 + 1).toBe(2);
});

it("has the correct length", () => {
  const ship = ShipFactory(3);
  expect(ship.length).toBe(3);
});

it("receive hits correctly", () => {
  const { hit, isHitAt } = ShipFactory(3);
  hit(2);
  expect(isHitAt[2]).toBe(true);
});

it("sunks correctly", () => {
  const { hit, isSunk } = ShipFactory(3);
  hit(0);
  hit(1);
  hit(2);
  expect(isSunk()).toBe(true);
});
