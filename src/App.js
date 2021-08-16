import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    axios
      .get(
        `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
      )
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
        console.log(advice);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button onClick={fetchAdvice} className="button">
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
