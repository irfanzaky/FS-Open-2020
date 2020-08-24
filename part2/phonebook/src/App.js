import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("No new name");

  function handleAddName(event) {
    event.preventDefault();
    console.log("new name added", event.target);
    const newNametoAdd = {
      name: newName,
    };
    setPersons(persons.concat(newNametoAdd));
  }
  function handleInputChange(event) {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <Phonebook persons={persons} />
      <div>debug: {newName}</div>
    </div>
  );
};

const Phonebook = ({ persons }) => {
  return persons.map((person) => <div key={person.name}>{person.name}</div>);
};

export default App;
