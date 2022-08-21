import { useContext, useEffect, useState } from "react";

import Logout from "../auth/Logout";
import { getBalanceOf } from "../../services/web3_methods";
import { userContext } from "../../context/userContext";

const Home = () => {
  const { account } = useContext(userContext);
  const [balance, setBalance] = useState("");

  useEffect(() => {
    console.log("🚀 | useEffect | account", account);
    getBalanceOf("0x9b7c18a71a98acd2f1271e2d1fe63750a70bc52b")
      .then((balance) => {
        setBalance(balance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Welcome Hooman</h1>
      <p>{account}</p>
      <p>{balance} DAI</p>
      <Logout />
    </>
  );
};

export default Home;
