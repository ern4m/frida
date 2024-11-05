import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Login } from './login/Login';

function App() {

  const [time, setTime] = useState(0);

  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    fetch('/time')
      .then(res => res.json())
      .then(data => {
        setTime(data.time)
      })
  },[])

  
  if (isLogged) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Time is `{time}`</p>
        </header>
      </div>
    );
  }
  return (
    <Login />
  )
}

export default App;
