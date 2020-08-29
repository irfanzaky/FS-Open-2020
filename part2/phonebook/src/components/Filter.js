import React from "react";
import Persons from "./Persons";

const Filter = ({ newSearch, handleSearchChange, filteredPerson }) => (
  <div>
    <form>
      filter shown with:
      <input value={newSearch} onChange={handleSearchChange} />
      <br />
    </form>
    <br />
    {filteredPerson.map((person) => (
      <div key={person.id}>
        {person.name} {person.number}
      </div>
    ))}
  </div>
);

export default Filter;
