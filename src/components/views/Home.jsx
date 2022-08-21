import { useContext, useEffect, useState, useCallback } from "react";
import React from 'react';
import Logout from "../auth/Logout";
import { getBalanceOf, sendTransaction, transferDAI } from "../../services/web3_methods";
import { userContext } from "../../context/userContext";
import { eventNames } from "process";

const Home = () => {
  const { account } = useContext(userContext);
  const [balance, setBalance] = useState("");
  const [to, setTo] = React.useState('')
  const [amount, setAmount] = React.useState('')

  useEffect(() => {
    getBalanceOf(account)
      .then((balance) => {
        setBalance(balance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const executeTransaction =(event) => {
    event.preventDefault()
    console.log("sending")
    console.log(amount, to, account)
    transferDAI(to, amount, account)
      .then((result) => {
        console.log("TX amount: ", amount, "to: ", to)
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }



  return (
    <>
      <h1>Welcome Hooman</h1>
      <p>{account}</p>
      <p>{balance} DAI</p>
      <form onSubmit={executeTransaction} action="#">
        <input
          aria-label="Recipient"
          onChange={(e) => setTo(e.target.value)}
          placeholder="0xA0Cf…251e"
          value={to}
        />
        <input
          aria-label="Amount (ether)"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.05"
          value={amount}
        />
        <button type="submit">Send</button>
      </form>
      <Logout />
    </>
  );
};

export default Home;
