import './App.css';
import React, { useState } from 'react';


// State function here
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calBmi = (e) => {
    e.preventDefault();

    const weightNum = parseFloat(weight);
    const heightFeet = parseFloat(height);

    if (!weightNum || !heightFeet) {
      alert("Please enter a valid weight and height");
      return;
    }

    // Convert height from feet to meters
    const heightMeters = heightFeet * 0.3048;

    // BMI formula: kg / m²
    const bmi = weightNum / (heightMeters * heightMeters);
    setBmi(bmi.toFixed(1));

    if (bmi < 18.5) 
      {
      setMessage("You are underweight");
      }
    if (bmi >= 18.5 && bmi < 25)
       {
      setMessage("You are a healthy weight");
     }
    else 
     {
       setMessage("You are overweight");
      }
  };



  // Reload function logic here
  const reload = () => {
    window.location.reload();
  };

  // Function to handle the form submission
  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter Your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (ft)</label>
            <input
              type="number"
              placeholder="Enter Your Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="button">Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
