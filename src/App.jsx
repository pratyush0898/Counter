import React, { useState } from "react";
import Frenchfries from '/french-fries.png';
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  function add() {
    setCount(count + 1);
  }

  function sub() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container">
      <div className="sec1">
        <div className="food"><img src={Frenchfries} alt="French fries"/></div>
      </div>
      <div className="sec2">
        <div className="title">
          <h1>French fries</h1>
        </div>
        <div className="count">
          <div className="sub">
            <button className="button" onClick={sub} disabled={count === 1}>
              -
            </button>
          </div>
          <div className="num">
            <span>{count}</span>
          </div>
          <div className="add">
            <button className="button" onClick={add}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
