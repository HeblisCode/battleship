import { useEffect, useState } from "react";
import { colorPalette } from "../Assets/colorPalette";
import styled from "styled-components";

export default function GameboardCell({ cell }) {
  const [cellColor, setCellColor] = useState(colorPalette.white);

  useEffect(() => {
    console.log(cell.isHit);
    if (cell.isHit && cell.isShipHit) {
      setCellColor(colorPalette.green);
    } else if (cell.isHit) {
      setCellColor(colorPalette.darkBlue);
    }
  }, [cell]);

  return <StyledGameboardCell cellColor={cellColor}></StyledGameboardCell>;
}

const StyledGameboardCell = styled.div`
  aspect-ratio: 1;
  height: 4rem;
  background-color: ${({ cellColor }) => cellColor};
`;
