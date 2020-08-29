import React from "react";

const Persons = ({ persons, handleDelete }) => {
  return persons.map((person) => (
    <div key={person.id}>
      {person.name} {person.number} {person.id}{" "}
      <button onClick={() => handleDelete(person)}>delete</button>
    </div>
  ));
};

export default Persons;
