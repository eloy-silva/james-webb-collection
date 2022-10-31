import React from "react";
import FirstAndSecond from "./components/FirstAndSecond";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Main, Section } from "./styles";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />

      <Main style={{ height: "500vh" }}>
        <Header />

        <Section style={{ height: "70%" }}>
          <FirstAndSecond />
        </Section>
        <Footer></Footer>
      </Main>
    </>
  );
}

export default App;
