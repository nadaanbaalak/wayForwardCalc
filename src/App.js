import React, { Component } from "react";
import Keypad from "./components/keypad";
import Display from "./components/display";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    result: 0,
    firstOperand: "",
    secondOperand: "",
    operator: "",
    flag: true,
  };

  handleClick = (value) => {
    if (value === "+" || value === "-" || value === "/" || value === "*") {
      let opflag = this.state.flag === true ? false : true;
      let op1 = this.state.firstOperand;
      let op2 = this.state.secondOperand;
      this.setState({
        operator: value,
        flag: opflag,
        result: op1 + value + op2,
      });
    } else if (value === "=") {
      this.calculate();
      console.log(this.state.result);
    } else {
      if (this.state.flag) {
        let op1 = this.state.firstOperand;
        op1 = op1 + value;
        this.setState({ firstOperand: op1, result: op1 });
      } else {
        let operator = this.state.operator;
        let op1 = this.state.firstOperand;
        let op2 = this.state.secondOperand;
        op2 = op2 + value;
        this.setState({ secondOperand: op2, result: op1 + operator + op2 });
      }
    }
  };

  calculate = () => {
    const { firstOperand, secondOperand, operator } = this.state;
    let opResult = 0;
    switch (operator) {
      case "+":
        opResult = firstOperand + secondOperand;
        this.setState({ result: opResult });
        break;
      case "-":
        opResult = firstOperand - secondOperand;
        this.setState({ result: opResult });
        break;
      case "*":
        opResult = firstOperand * secondOperand;
        this.setState({ result: opResult });
        break;
      case "/":
        if (firstOperand === 0) {
          this.setState({ result: 0 });
          break;
        }
        opResult = firstOperand / secondOperand;
        this.setState({ result: opResult });
        break;
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calculator">
          <Display result={this.state.result} />
          <Keypad onButtonPress={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
