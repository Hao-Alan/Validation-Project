import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const configDarkThemes = {
  color: "#F2F3F4",
  background: "#566573",
  fontSize: "15px",
};

const configLightThemes = {
  color: "#000",
  background: "#D5F5E3",
  fontSize: "30px",
};

const DemoThemes = () => {
  const [theme, setTheme] = useState(configDarkThemes);

  const handleChange = (event) => {
    let TempTheme = { ...theme };
    TempTheme =
      event.target.value === "1" ? configDarkThemes : configLightThemes;
    setTheme(TempTheme);
  };

  const StyleDiv = styled.div`
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.background};
    font-size: ${(props) => props.theme.fontSize};
    padding: 5%; ;
  `;

  return (
    <ThemeProvider theme={theme}>
      <StyleDiv>Hello LLffjjf</StyleDiv>
      <select onChange={handleChange}>
        <option value="1">Dark Theme</option>
        <option value="2">Light Theme</option>
      </select>
    </ThemeProvider>
  );
};

export default DemoThemes;
