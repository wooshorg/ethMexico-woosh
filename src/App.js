import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./components/views/Home";
import Landing from "./components/views/Landing";
import Profile from "./components/profile";
import Request from "./components/views/Request";
import Send from "./components/views/Send";
import Verify from "./components/views/Verify";
import { useLocalStorage } from "./components/hooks/UseLocalStorage";
import { useState } from "react";
import { userContext } from "./context/userContext";

// import Transactions from "./components/transactions";

function App() {
  const [account, setAccount] = useLocalStorage("account", null);
  const [isVerified, setIsVerisVerified] = useState(false);
  const value = { account, setAccount, isVerified, setIsVerisVerified };

  return (
    <userContext.Provider value={value}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/transactions" element={<Transactions />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/send" element={<Send />} />
          <Route path="/request" element={<Request />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
