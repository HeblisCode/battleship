import { createGlobalStyle } from "styled-components";
import { colorPalette } from "../Assets/colorPalette";

export const GlobalStyle = createGlobalStyle`
    html{
        min-height: 100vh;
    }
    body{
        height: 100%;
    }
    #root{
        min-height: 100vh;
        background-color: ${colorPalette.darkBlue}
    }
`;
