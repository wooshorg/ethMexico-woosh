import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/views/Home";
import Landing from "./components/views/Landing";
import Profile from "./components/profile";
import Send from "./components/views/Send";
import Verify from "./components/views/Verify";
import { useLocalStorage } from "./components/hooks/UseLocalStorage";
import { useState } from "react";
import { userContext } from "./context/userContext";

function App() {
  const [account, setAccount] = useLocalStorage("account", null);
  const [balance, setBalance] = useLocalStorage("balance", 0);
  const [creditsAvailable, setCreditsAvailable] = useLocalStorage("creditsAvailable", 0);
  const value = { account, setAccount, balance, setBalance, creditsAvailable, setCreditsAvailable };

  return (
    <userContext.Provider value={value}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/send" element={<Send />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
