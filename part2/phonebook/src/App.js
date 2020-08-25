import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [newName, setNewName] = useState("Irfan");
  const [newNumber, setNewNumber] = useState("831-1823-1238");
  const [newSearch, setNewSearch] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  function handleAddName(event) {
    event.preventDefault();
    const newPersontoAdd = { name: newName, number: newNumber };
    const checkPerson = persons.filter((person) => person.name === newName).length;
    //console.log(persons, newPersontoAdd, checkPerson);

    if (checkPerson) {
      alert(`${newName} is already added to phonebook`);
      console.log(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPersontoAdd));
      console.log("new name added", event.target);
    }
  }

  function handleNameChange(event) {
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  function handleNumberChange(event) {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }
  function handleSearchChange(event) {
    console.log(event.target.value, filteredPerson);
    setNewSearch(event.target.value);
  }

  const filteredPerson = persons.filter((person) => person.name.includes(newSearch));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newSearch={newSearch}
        filteredPerson={filteredPerson}
        handleSearchChange={handleSearchChange}
      />

      <h2>Add new person</h2>
      <PersonForm
        handleAddName={handleAddName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
        newName={newName}
      />

      <h2>Numbers</h2>
      <Person persons={persons} />
    </div>
  );
};

const Filter = ({ newSearch, handleSearchChange, filteredPerson }) => (
  <div>
    <form>
      filter shown with:
      <input value={newSearch} onChange={handleSearchChange} />
      <br />
    </form>
    <Person persons={filteredPerson} />
  </div>
);

const PersonForm = ({
  handleAddName,
  handleNameChange,
  handleNumberChange,
  newNumber,
  newName,
}) => (
  <div>
    <form onSubmit={handleAddName}>
      name: <input value={newName} onChange={handleNameChange} />
      <br />
      number: <input value={newNumber} onChange={handleNumberChange} />
      <br />
      <button type="submit">add</button>
      <br />
    </form>
  </div>
);

const Person = ({ persons }) => {
  return persons.map((person) => (
    <div key={person.name}>
      {person.name} {person.number}
    </div>
  ));
};

export default App;
