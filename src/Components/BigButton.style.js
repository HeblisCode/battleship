import styled from "styled-components";
import { colorPalette } from "../Assets/colorPalette";
import { animated } from "@react-spring/web";

export const BigButton = styled(animated.button)`
  font-family: "Bungee", cursive;
  color: ${colorPalette.white};
  background-color: ${colorPalette.darkGrey};
  border: none;
  font-size: 2rem;
  width: 20rem;
  height: 5rem;
  transition: transform 0.3s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;
