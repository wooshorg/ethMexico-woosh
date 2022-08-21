import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./components/views/Home";
import Landing from "./components/views/Landing";
import Request from "./components/views/Request";
import Send from "./components/views/Send";
import Verify from "./components/views/Verify";
import { useLocalStorage } from "./components/hooks/UseLocalStorage";
import { useState } from "react";
import { userContext } from "./context/userContext";

import Transactions from './components/home/Transactions';
import Profile from './components/profile';
import AddContact from './components/addContact';
import PayRequest from './components/views/PayRequest';

function App() {
  const [account, setAccount] = useLocalStorage("account", null);
  const [isVerified, setIsVerisVerified] = useState(false);
  const value = { account, setAccount, isVerified, setIsVerisVerified };

  return (
    <userContext.Provider value={value}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/send" element={<Send />} />
          <Route path="/request" element={<Request />} />
          <Route path="/pay-request" element={<PayRequest />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/add-contact" element={<AddContact />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;