import useGameboard from "../useGameboard";
import { act, renderHook } from "@testing-library/react-hooks";

it("works", () => {
  expect(1 + 1).toBe(2);
});

it("generates a grid with the correct structure", () => {
  const { result } = renderHook(() => useGameboard(2));
  const { grid } = result.current;

  expect(grid).toStrictEqual([
    [
      { isHit: false, position: "00", isShipHit: false },
      { isHit: false, position: "01", isShipHit: false },
    ],
    [
      { isHit: false, position: "10", isShipHit: false },
      { isHit: false, position: "11", isShipHit: false },
    ],
  ]);
});

it("correctly places one ship", () => {
  const { result } = renderHook(() => useGameboard(5));
  const { placeShip } = result.current;

  act(() => placeShip(3, "00", "vertical"));

  expect(result.current.ships.length).toBe(1);
});

it("avoids collisions while placing ships", () => {
  const { result } = renderHook(() => useGameboard(5));
  const { placeShip } = result.current;

  act(() => {
    placeShip(3, "00", "vertical");
    placeShip(3, "00", "horizontal");
  });

  expect(result.current.ships.length).toBe(1);
});

it("avoids placing ships outside the grid", () => {
  const { result } = renderHook(() => useGameboard(5));
  const { placeShip } = result.current;

  act(() => {
    placeShip(3, "55", "vertical");
  });

  expect(result.current.ships.length).toBe(0);
});

it("correctly update the grid after a hit", () => {
  const { result } = renderHook(() => useGameboard(5));
  const { placeHit } = result.current;

  act(() => {
    placeHit("00");
  });

  const { grid } = result.current;
  expect(grid[0][0].isHit).toBe(true);
  expect(grid[0][0].isShipHit).toBe(false);
});

//this test fails cause the placeHit method is called before the ships state update
//so it doesn't know there's a ship placed on "00"
it("correctly update the grid after a successfull hit", () => {
  const { result } = renderHook(() => useGameboard(5));
  const { placeHit, placeShip } = result.current;

  act(() => {
    placeShip(3, "00", "vertical");
  });

  act(() => placeHit("00"));

  const { grid } = result.current;

  expect(grid[0][0].isHit).toBe(true);
  expect(grid[0][0].isShipHit).toBe(true);
});

//same for this one, it fails cause it doesn't correctly update the state
it("correctly detects a gameover and calls the callback", () => {
  const { result } = renderHook(() => useGameboard(5));
  const { placeHit, placeShip } = result.current;

  act(() => {
    placeShip(1, "00", "vertical");
  });

  act(() => placeHit("00"));

  const { isGameOver } = result.current;
  expect(isGameOver).toBe(true);
});
