import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { GlobalStyle, theme } from "./GlobalStyle";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/EmphasoftTest">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
