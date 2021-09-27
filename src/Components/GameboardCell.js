import { useEffect, useState } from "react";
import { colorPalette } from "../Assets/colorPalette";
import styled from "styled-components";

export default function GameboardCell({ cell, clickHandler }) {
  const [cellColor, setCellColor] = useState(colorPalette.white);

  useEffect(() => {
    if (cell.isHit && cell.isShipHit) {
      setCellColor(colorPalette.green);
    } else if (cell.isHit) {
      setCellColor(colorPalette.darkBlue);
    }
  }, [cell]);

  return (
    <StyledGameboardCell
      cellColor={cellColor}
      onClick={clickHandler}
    ></StyledGameboardCell>
  );
}

const StyledGameboardCell = styled.div`
  background-color: ${({ cellColor }) => cellColor};
`;
