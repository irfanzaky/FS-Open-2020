import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.content.name} {props.content.exercise}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part content={props.content[0]} />
      <Part content={props.content[1]} />
      <Part content={props.content[2]} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.totalExcercise}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header name={course.name} />
      <Content content={course.parts} />
      <Total
        totalExcercise={course.parts.reduce(
          (acc, part) => acc + part.exercise,
          0
        )}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
