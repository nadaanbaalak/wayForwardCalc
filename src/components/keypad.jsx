import React from "react";
import "./styles/keypad.css";

const Keypad = (props) => {
  return (
    <div className="keypad">
      <div className="keypadRow" key={1}>
        {[7, 8, 9, "/"].map((ele) => {
          return (
            <button
              key={ele}
              value={ele}
              onClick={() => props.onButtonPress(ele)}
              className="btn btn-secondary button"
            >
              {ele}
            </button>
          );
        })}
      </div>
      <div className="keypadRow" key={2}>
        {[4, 5, 6, "*"].map((ele) => {
          return (
            <button
              key={ele}
              value={ele}
              className="btn btn-secondary button"
              onClick={() => props.onButtonPress(ele)}
            >
              {ele}
            </button>
          );
        })}
      </div>
      <div className="keypadRow" key={3}>
        {[1, 2, 3, "-"].map((ele) => {
          return (
            <button
              key={ele}
              value={ele}
              className="btn btn-secondary button"
              onClick={() => props.onButtonPress(ele)}
            >
              {ele}
            </button>
          );
        })}
      </div>
      <div className="keypadRow" key={4}>
        {[0, ".", "=", "+"].map((ele) => {
          return (
            <button
              key={ele}
              value={ele}
              className="btn btn-secondary button"
              onClick={() => props.onButtonPress(ele)}
            >
              {ele}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Keypad;
