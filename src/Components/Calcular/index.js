import React from "react";
import { Container } from "./styles";

export default class Calcular extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };

    this.handleNum1 = this.handleNum1.bind(this);
    this.handleNum2 = this.handleNum2.bind(this);
    this.soma = this.soma.bind(this);
  }
  handleNum1(event) {
    this.setState({
      num1: Number(event.target.value)
    });
  }

  handleNum2(event) {
    this.setState({
      num2: Number(event.target.value)
    });
  }

  soma() {
    this.setState({
      result: this.state.num1 + this.state.num2
    })

  }

  render() {
    return (

      <Container>
        <input type="number" value={this.state.num1} onChange={this.handleNum1} />
        <p>+</p>
        <input type="number" value={this.state.num2} onChange={this.handleNum2} />

        <div>
          <button onClick={this.soma}>=</button>
        </div>

        <label>{this.state.result}</label>
      </Container>

    )
  }


}