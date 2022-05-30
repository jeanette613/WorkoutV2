import './App.css'
import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {
        user ?
          <Routes>
          </Routes>
          :
          <AuthPage setUser={setUser} />
      }
    </main >
  );
}

export default App;


