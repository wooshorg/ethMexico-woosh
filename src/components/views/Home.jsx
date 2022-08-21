import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import ProfileOverview from "../home/ProfileOverview";
import React from "react";
import Receive from "../home/Receive";
import Transactions from "../home/Transactions";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header>
          <img src="/assets/settings-icon.svg" alt="Settings" />
        </Header>
        <ProfileOverview />
        <div className="my-6">
          <Receive />
        </div>
        <div className="w-full h-[1px] bg-white/10 mt-8 mb-6" />
        <Transactions />
      </div>
      <Navbar />
    </>
  );
};

export default Home;
