import React from "react";
import { GlobalStyle, theme, Container } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Links from "./components/Links";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <h1 style={{ textAlign: "center", margin: "3rem 0" }}>
          Firebase React Crud
        </h1>
        <Links />
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
