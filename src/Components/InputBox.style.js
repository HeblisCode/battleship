import styled from "styled-components";
import { colorPalette } from "../Assets/colorPalette";
import { animated } from "@react-spring/web";

export const InputBox = styled(animated.input)`
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${colorPalette.white};
  color: ${colorPalette.white};
  font-family: "Bungee", cursive;
  font-size: 2.5rem;
  text-align: center;
  width: 30rem;

  &::placeholder {
    color: ${colorPalette.white};
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-bottom: 3px solid ${colorPalette.green};
  }
`;
