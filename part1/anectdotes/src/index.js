import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const setNextAnecdotes = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));
  const addVote = () => {
    const newPoints = { ...points };
    newPoints[selected] += 1;
    setPoints({ ...newPoints });
    console.log("after", points, selected);
  };

  return (
    <div>
      {props.anecdotes[selected]}
      <br />
      <button onClick={addVote}>vote</button>
      <button onClick={setNextAnecdotes}>next anecdotes</button>
      <br />
      has {points[selected]} votes
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
