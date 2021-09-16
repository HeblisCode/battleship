import useGameboard from "./Hooks/useGameboard/useGameboard";

function App() {
  const { grid, placeShip, isPlacementLegal, ships, placeHit, isGameOver } =
    useGameboard(5);

  return (
    <div className="App">
      <button onClick={() => placeShip(1, "00", "vertical")}>Place Ship</button>
      <button onClick={() => placeShip(3, "01", "vertical")}>
        Place Ship 2
      </button>
      <button onClick={() => placeHit("00")}>Hit Ship</button>
      <p>{JSON.stringify(grid)}</p>
      <br />
      <p>{JSON.stringify(ships)}</p>
      <br />
      <p>Gameover: {isGameOver ? "yes" : "no"}</p>
    </div>
  );
}

export default App;
