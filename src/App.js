import "./App.css";

import { Route, Routes } from "react-router-dom";

import AddContact from "./components/addContact";
import Contacts from "./components/views/Contacts";
import CreateProfile from "./components/CreateProfile";
import Home from "./components/views/Home";
import Landing from "./components/views/Landing";
import Login from "./components/views/Login";
import PayRequest from "./components/views/PayRequest";
import Request from "./components/views/Request";
import Send from "./components/views/Send";
import Transactions from "./components/home/Transactions";
import Verify from "./components/views/Verify";
import { useLocalStorage } from "./components/hooks/UseLocalStorage";
import { useState } from "react";
import { userContext } from "./context/userContext";

function App() {
  const [account, setAccount] = useLocalStorage("account", null);
  const [balance, setBalance] = useLocalStorage("balance", 0);
  const [creditsAvailable, setCreditsAvailable] = useLocalStorage(
    "creditsAvailable",
    0
  );
  const value = {
    account,
    setAccount,
    balance,
    setBalance,
    creditsAvailable,
    setCreditsAvailable,
  };

  return (
    <userContext.Provider value={value}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/send" element={<Send />} />
          <Route path="/request" element={<Request />} />
          <Route path="/pay-request" element={<PayRequest />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/add-contact" element={<AddContact />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
