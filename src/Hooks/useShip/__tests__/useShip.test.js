import { renderHook, act } from "@testing-library/react-hooks";
import useShip from "../useShip";

it("works", () => {
  expect(1 + 1).toBe(2);
});

it("has the correct length", () => {
  const { result } = renderHook(() => useShip(3));
  expect(result.current.length).toBe(3);
});

it("receive hits correctly", () => {
  const { result } = renderHook(() => useShip(3));
  const { hit, isHitAt } = result.current;
  act(() => {
    hit(2);
  });
  expect(isHitAt[2]).toBe(true);
});

it("sunks correctly", () => {
  const { result } = renderHook(() => useShip(3));
  const { isSunk, hit } = result.current;
  act(() => {
    hit(0);
    hit(1);
    hit(2);
  });
  setTimeout(() => expect(isSunk).toBe(true), 0); //this is needed since useEffect update asyncronously
});
