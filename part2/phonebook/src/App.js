import React, { useState } from "react";

const App = () => {
  const [newName, setNewName] = useState("Irfan");
  const [newNumber, setNewNumber] = useState("831-1823-1238");
  const [newSearch, setNewSearch] = useState("");
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

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
      <form>
        filter shown with:
        <input value={newSearch} onChange={handleSearchChange} />
        <br />
      </form>
      <Phonebook persons={filteredPerson} />

      <h2>Add new person</h2>
      <form onSubmit={handleAddName}>
        name: <input value={newName} onChange={handleNameChange} />
        <br />
        number: <input value={newNumber} onChange={handleNumberChange} />
        <br />
        <button type="submit">add</button>
        <br />
      </form>

      <h2>Numbers</h2>
      <Phonebook persons={persons} />
      <div>debug: {newName}</div>
    </div>
  );
};

const Phonebook = ({ persons }) => {
  return persons.map((person) => (
    <div key={person.name}>
      {person.name} {person.number}
    </div>
  ));
};

export default App;
