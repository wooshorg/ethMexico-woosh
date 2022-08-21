import './App.css';
import { useState } from 'react';
import { userContext } from './context/userContext';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/views/Landing';
import Home from './components/views/Home';
import Verify from './components/views/Verify';
import Send from './components/views/Send';
import Profile from './components/profile';
import Request from './components/views/Request';

function App() {
  const [account, setAccount] = useState(null);
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
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
