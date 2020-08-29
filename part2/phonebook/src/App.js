import React, { useState, useEffect } from "react";
import PersonService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  // Application's State
  const [newName, setNewName] = useState("Irfan");
  const [newNumber, setNewNumber] = useState("831-1823-1238");
  const [newSearch, setNewSearch] = useState("");
  const [persons, setPersons] = useState([
    {
      name: "Irfan",
      number: "831-1823-1238",
      id: 15,
    },
  ]);

  // Application's Effect
  useEffect(() => {
    console.log("effect");
    PersonService.getAll().then((data) => {
      console.log("promise fulfilled", data);
      setPersons(data);
    });
  }, []);

  // Application's events handler
  function handleAddName(event) {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const currentPerson = persons.filter((person) => person.name === newName);

    console.log("adding new name", currentPerson, newName);

    if (currentPerson.length) {
      const confirmation = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (confirmation) {
        PersonService.update(currentPerson[0].id, newPerson).then((res) => {
          setPersons(persons.filter((p) => p.id !== res.id).concat(res));
        });
        console.log("new name updated");
      } else console.log("new name not updated");
    } else {
      PersonService.create(newPerson).then((response) => {
        console.log(response);
        setPersons(persons.concat(response));
      });
      console.log("new name added", event.target);
    }
  }

  function handleDelete(personToDelete) {
    // eslint-disable-next-line no-restricted-globals
    const confirmToDelete = confirm(`Are you sure to delete ${personToDelete.name} ?`);
    if (confirmToDelete) {
      setPersons(persons.filter((person) => person.name !== personToDelete.name));
      PersonService.remove(personToDelete).then((response) => console.log(response));
    } else alert("Deletion canceled");
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
      <Persons persons={persons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
