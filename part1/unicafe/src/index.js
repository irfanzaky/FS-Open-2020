import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <div>
      <h1>statistic</h1>
      <p>
        good {good}
        <br />
        neutral {neutral}
        <br />
        bad {bad}
        <br />
        all {}
        <br />
        average {(good - bad) / all}
        <br />
        positive {good / all} %
      </p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={good + neutral + bad}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
