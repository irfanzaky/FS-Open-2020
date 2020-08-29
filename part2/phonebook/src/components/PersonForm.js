import React from "react";

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

export default PersonForm;
