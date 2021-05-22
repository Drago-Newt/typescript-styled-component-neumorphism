import React from "react";
import "./App.css";
import styled from "styled-components";

interface BProps {
  size: string;
}

const ButtonBase = styled.button<BProps>`
  height: 2em;
  margin: 0.2em;
  padding: 0 1em;
  font-family: "Space Mono", sans-serif;
  font-size: ${(props) => (props.size ? props.size : "2em")};
  text-transform: lowercase;
  background-color: white;
  cursor: pointer;
`;
const NeumorphismButton = styled(ButtonBase)`
  border: none;
  margin: 0.8em;
  padding: 10px;
  background: #ebecf0;
  border-radius: ${(props) => props.size ? props.size : "2em"};
  box-shadow: 20px 20px 60px #c1c1c1, -20px -20px 60px #efecec;
  &:hover {
    box-shadow: inset 3px 3px 5px #bbbbbb, inset -3px -3px 5px #ffffff;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <NeumorphismButton size={"1.5em"}>💛</NeumorphismButton>
      <NeumorphismButton size={""}>🧡</NeumorphismButton>
      <NeumorphismButton size={"1.5em"}>💚</NeumorphismButton>
    </React.Fragment>
  );
};

export default App;
