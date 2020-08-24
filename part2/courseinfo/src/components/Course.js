import React from "react";

const Course = ({ course }) => {
  console.log(course);
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
  return <h2>{name}</h2>;
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

export default Course;
