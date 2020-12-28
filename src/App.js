import React, { useState } from "react";
import Loader from "react-loader";
// import ReactTimeout from "react-timeout";

import "./styles.css";

export default function App() {
  const [loaded, setLoaded] = useState(true);
  const [birthDate, setBirthDate] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [output, setOutput] = useState("");
  function clickHandler() {
    setLoaded(!loaded);
    setTimeout(myFunction, 3000);
  }
  function myFunction() {
    setLoaded(true);
    let birthDayString = birthDate;
    let luckyNumberValue = luckyNumber;
    if (birthDayString === "" || luckyNumberValue === "") {
      alert("Please enter birthday and lucky number");
    } else {
      let sum = 0;
      for (let i = 0; i < birthDayString.length; i++) {
        if (birthDayString[i] !== "-") {
          sum += birthDayString[i];
        }
      }
      if (sum % luckyNumberValue === 0) {
        setOutput("Congratulations you are lucky!!");
      } else {
        setOutput("So sorry but you are not Lucky..");
      }
    }
  }
  function fetchBirthDate(event) {
    setBirthDate(event.target.value);
  }
  function fetchLuckyNumber(event) {
    setLuckyNumber(event.target.value);
  }

  return (
    <div className="App">
      <div className="container card-3">
        <h1>Lucky birthday App</h1>
        <h2>Let's find out your are lucky or not</h2>
        <h3>Enter your birthdate</h3>
        <input type="date" id="birth-date" onChange={fetchBirthDate} />
        <h3>Enter your lucky number</h3>
        <input type="number" id="lucky-number" onChange={fetchLuckyNumber} />
        <br />
        <input
          type="submit"
          id="submit-btn"
          className="card-3"
          onClick={clickHandler}
        />
        <Loader
          loaded={loaded}
          lines={13}
          length={20}
          width={10}
          radius={30}
          corners={1}
          rotate={0}
          direction={1}
          color="#000"
          speed={1}
          trail={60}
          shadow={false}
          hwaccel={false}
          className="spinner"
          zIndex={2e9}
          top="50%"
          left="50%"
          scale={1.0}
          loadedClassName="loadedContent"
        />
        <h3>{output}</h3>
      </div>
      <footer className="footer card-3">
        <li>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://github.com/amansethi00"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/oye.sethi.00"
            style={{ textDecoration: "none", color: "black" }}
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/amansethi00"
            style={{ textDecoration: "none", color: "black" }}
          >
            Twitter
          </a>
        </li>
      </footer>
    </div>
  );
}
