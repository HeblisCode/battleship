import { useState } from "react";
import styled from "styled-components";
import { MainHeader } from "../Components/MainHeader.style";
import { BigButton } from "../Components/BigButton.style";
import { InputBox } from "../Components/InputBox.style";
import { useSpring, useTransition, config } from "@react-spring/web";

export default function Home({ createPlayer }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const headerSlidingAnimation = useSpring({
    y: isGameStarted ? "-5rem" : "0rem",
    config: config.default,
  });
  const buttonSlidingAnimation = useSpring({
    y: isGameStarted ? "+4rem" : "0rem",
    config: config.stiff,
  });
  const inputBoxTransition = useTransition(isGameStarted, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 300,
  });

  function onInputChange(e) {
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  function isInputValid() {
    return true;
  }

  function invalidInput() {}

  function clickButton() {
    if (!isGameStarted) {
      setIsGameStarted(true);
    } else {
      if (isInputValid(inputValue)) {
        createPlayer(inputValue);
      } else {
        invalidInput();
      }
    }
  }

  return (
    <StyledHome isGameStarted={isGameStarted}>
      <MainHeader style={headerSlidingAnimation}>Battleship</MainHeader>
      {inputBoxTransition((props, toggle) => {
        return toggle ? (
          <InputBox
            placeholder={"Your name"}
            style={props}
            type="text"
            onChange={onInputChange}
            value={inputValue}
          ></InputBox>
        ) : null;
      })}
      <BigButton style={buttonSlidingAnimation} onClick={clickButton}>
        Play
      </BigButton>

      {/* <InputBox
        type="text"
        onChange={onInputChange}
        value={inputValue}
      ></InputBox>
       */}
    </StyledHome>
  );
}

const StyledHome = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  position: relative;

  & > input {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
