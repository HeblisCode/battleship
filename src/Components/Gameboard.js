import GameboardCell from "./GameboardCell";
import styled from "styled-components";

import React from "react";

export default function Gameboard({ gameboard, player }) {
  const { grid, placeHit } = gameboard;
  return (
    <StyledGameboard size={grid.length}>
      {grid.map((row) =>
        row.map((cell) => {
          const clickHandler = () => {
            const isAttackLegal = player.attack(cell.position, grid);
            if (isAttackLegal) {
              placeHit(cell.position);
            }
          };
          return (
            <GameboardCell
              cell={cell}
              key={cell.position}
              clickHandler={clickHandler}
            />
          );
        })
      )}
    </StyledGameboard>
  );
}

const StyledGameboard = styled.div`
  display: grid;
  aspect-ratio: 1;
  width: 30%;
  gap: 3px;
  grid-template-columns: ${({ size }) => "repeat(" + size + ",1fr)"};
  grid-template-rows: ${({ size }) => "repeat(" + size + ",1fr)"};
`;
