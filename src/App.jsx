import './App.css';


import { useState } from "react";
import { puppyList } from "./data.js";


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);

  return (
    <div className="App">
      <h1>Puppy Pals</h1>

      {puppies.map((puppy) => (
        <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}

      {featPupId && featuredPup && (
        <div className="puppy-details">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;