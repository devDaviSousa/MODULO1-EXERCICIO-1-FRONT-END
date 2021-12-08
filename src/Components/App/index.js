import React from "react";
import Header from "../Header";
import Calcular from "../Calcular";
import { GlobalStyle } from "../../styles/global";
import { Container } from "./styles";


export default class App extends React.Component {

  render() {

    return (
      <Container>
        <Header titulo={process.env.REACT_APP_TITLE} />
        <Calcular />
        <GlobalStyle />
      </Container>

    )
  }
}