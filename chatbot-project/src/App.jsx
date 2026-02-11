import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import Sidebar from './Sidebar';

function App() {

  if (!localStorage.getItem("count")) {
    localStorage.setItem("count", 0);
  };

  if (!localStorage.getItem("isLocked")) {
    localStorage.setItem("isLocked", false);
  }

  const [count, setCount] = useState(parseInt(localStorage.getItem("count")));

  const [isLocked, setIsLocked] = useState(JSON.parse(localStorage.getItem("isLocked")));

  localStorage.setItem("count", count);
  localStorage.setItem("isLocked", isLocked);

  return (
    <div className="app">
      <Sidebar></Sidebar>

      <img src={reactLogo} className="logo" alt="React logo" />
      <h1 className="title">React Counter</h1>
      <div className="button-container">
        <div className="button-row">
          <button className="count-btn" onClick={() => isLocked ? setCount(count + 1) : null}>Count: {count}</button>
          <button className="reset-btn" onClick={() => isLocked ? setCount(0) : null}>Reset</button>
        </div>
        <div className="button-row">
          <button className="lock-btn" onClick={() => setIsLocked(!isLocked)}>{isLocked ? "Unlocked" : "Locked"}</button>
        </div>
      </div>
    </div>
  )
}

export default App
