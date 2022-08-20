import './App.css';
import { useState } from "react";
import { userContext } from './context/userContext';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

function App() {
  const [account, setAccount] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = { account, setAccount, isLoggedIn, setIsLoggedIn };


  return (
    <userContext.Provider value={value}>
    <div className="App">
      <h2>Magic Connect</h2>
        {!account && (
          <>
            <Login />
          </>
        )}
        {account && (
          <>
            <Logout />
          </>
        )}
    </div> 
    </userContext.Provider>
  );
}


export default App;



