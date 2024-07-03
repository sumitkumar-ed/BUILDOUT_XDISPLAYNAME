import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="App">
      <h1>Full Name Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <h2 className="full-name-display">Full Name: {fullName}</h2>}
    </div>
  );
};

export default App;
