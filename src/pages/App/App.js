import './App.css'
import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        user ?
          <>
            <h1>User has been found</h1>
            {/* <Routes>
              <Route path="/*" element={}></Route>
            </Routes> */}
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main >
  );
}

export default App;


