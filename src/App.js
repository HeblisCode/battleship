import PlayerFactory from "./Factories/PlayerFactory/PlayerFactory";
import Home from "./Pages/Home";
import { useState } from "react";
import useGameboard from "./Hooks/useGameboard/useGameboard";
import { GlobalStyle } from "./Components/GlobalStyle.style";
import { CSSReset } from "./Components/CSSReset.style";
import styled from "styled-components";

function App() {
  const [player, setPlayer] = useState({});
  const [PCPlayer, setPCPlayer] = useState(PlayerFactory("PC"));

  function createPlayer(name) {
    setPlayer(PlayerFactory(name));
  }

  return (
    <AppContainer className="App">
      <GlobalStyle />
      <CSSReset />
      <Home createPlayer={createPlayer} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

export default App;
