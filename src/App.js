import React from 'react';
import './App.css';

function GreetingCard(props) {
  return (
    <div className="card">
      <h2>{props.greeting}</h2>
      <p>{props.message}</p>
      <img src={props.image} alt="Greeting Card" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Simple Greeting Card</h1>
      <GreetingCard
        greeting="Hello!"
        message="Wishing you a wonderful day."
        image="https://example.com/greeting-image.jpg" // Replace with your image URL
      />
    </div>
  );
}

export default App;
