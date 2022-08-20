import './App.css';
import { useState } from "react";
import { userContext } from './context/userContext';
import MagicLogin from './components/auth/MagicLogin';
import Logout from './components/auth/Logout';
import WorldId from './components/auth/WorldID';

function App() {
  const [account, setAccount] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = { account, setAccount, isLoggedIn, setIsLoggedIn };



  return (
    <userContext.Provider value={value}>
    <div className="App">
    </div> 
    </userContext.Provider>
  );
}


export default App;



