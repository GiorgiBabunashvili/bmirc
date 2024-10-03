import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight (ibs)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline">Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is: BMI</h3>
            <p>MESSAGE</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
