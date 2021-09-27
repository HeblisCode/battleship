import styled from "styled-components";
import { colorPalette } from "../Assets/colorPalette";
import { animated } from "@react-spring/web";

export const MainHeader = styled(animated.h1)`
  font-family: "Bungee", cursive;
  color: ${colorPalette.white};
  font-size: 7rem;
  line-height: 100%;
`;
