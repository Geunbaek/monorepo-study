import React from "react";
import GlobalStyle from "./app/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./app/theme";

const App = () => (
  <div className="container">
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  </div>
);

export default App;
