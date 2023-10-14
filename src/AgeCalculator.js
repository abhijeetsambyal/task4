import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const enteredYear = parseInt(birthYear, 10);

    if (!isNaN(enteredYear) && enteredYear <= currentYear) {
      const calculatedAge = currentYear - enteredYear;
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <label htmlFor="birthYear">Enter your birth year:</label>
      <input
        type="text"
        id="birthYear"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>

      {age !== null && (
        <div>
          <h2>Your age is: {age} years</h2>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
