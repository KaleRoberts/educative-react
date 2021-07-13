import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');

  useEffect(() => {
    if(!message && count > 5) {
      setMessage(`Wow... you are on a clicking spree`);
    }
  }, [count, message]);

  return (
    <div className="App">
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count- 1)}>Decrement</button>

      {message}

      <button onClick={() => {
        setCount(0);
        setMessage(``);
      }}>RESET</button>

      <div>
        <input value={name} onChange={event => setName(event.target.value)} />
        <input value={email} onChange={event => setEmail(event.target.value)} />

        <p>Name {name}</p>
        <p>Email {email}</p>
      </div>
    </div>
  );
}

export default App;
