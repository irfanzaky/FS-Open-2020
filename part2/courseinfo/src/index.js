import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };
  return <Course course={course} />;
};
const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content content={course.parts} />
      <Total
        totalExcercise={course.parts.reduce(
          (acc, part) => acc + part.exercises,
          0
        )}
      />
    </div>
  );
};
const Header = ({ name }) => {
  return <h1>{name}</h1>;
};
const Content = ({ content }) => {
  return (
    <div>
      {content.map((contentPart) => (
        <Part key={contentPart.id} content={contentPart} />
      ))}
    </div>
  );
};

const Total = ({ totalExcercise }) => {
  return (
    <p>
      <b>total of {totalExcercise} exercises</b>
    </p>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.content.name} {props.content.exercises}
    </p>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
