import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import polygonscan from "polygonscan-api";

import { userContext } from "../context/userContext";


const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const {account} = useContext(userContext);

  const loadTransactions = async () => {
    if (account === null) {return;};

    const myAddress = account; // TODO: get this from global stored data
    const api = polygonscan.init(process.env.POLYGONSCAN_API_KEY, 'mumbai', '3000'); // TODO: get this from ENV
    var txs = await api.account.tokentx(myAddress);
    
    let listTxs = [];
    for(var i=0; i < txs.result.length; i++) {
      let tx = txs.result[i];
      
      let contactName = "";
      let type = "Out";
      if (tx.from.toLowerCase() !== myAddress.toLowerCase()) {
        type = "In";

        // TODO: compare to contact addresses to get name
        contactName = "Pancho";
      }

      let data = {
        time: new Date(parseInt(tx.timeStamp*1000)).toLocaleString("en-US"),
        amount: ethers.utils.formatUnits(tx.value, parseInt(tx.tokenDecimal)),
        tokenSymbol: tx.tokenSymbol,
        contactName: contactName,
        type: type,
      };

      listTxs.push(data);
    }
    setTransactions(t => {return listTxs});
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <>
      <h1>Last Transactions</h1>
      <ul> 
        {transactions.map((e, i) => (
          <li key={i}> this is a transaction for {e.amount} {e.tokenSymbol}
          </li>
        ))}
      </ul>
    </>
  )
}
export default Transactions; 