import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./components/views/Home";
import Landing from "./components/views/Landing";
import Transactions from "./components/transactions";
import Verify from "./components/views/Verify";
import { useState } from "react";
import { userContext } from "./context/userContext";

function App() {
  const [account, setAccount] = useState(null);
  const [isVerified, setIsVerisVerified] = useState(false);
  const value = { account, setAccount, isVerified, setIsVerisVerified };

  return (
    <userContext.Provider value={value}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/home" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
