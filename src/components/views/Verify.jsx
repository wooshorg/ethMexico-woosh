import { useContext, useEffect } from "react";

import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import { WorldIDWidget } from "@worldcoin/id";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";

const Verify = () => {
  const navigate = useNavigate();
  const { account } = useContext(userContext);

  useEffect(() => {
    console.log(account);
  }, []);

  const completeVerification = async (verificationResponse) => {
    console.log(verificationResponse);
    console.log(account);
    //TO DO - SEND HAS FROM WORLDCOIN VERIFY API TO BACKEND - DEV SIM NOT WORKING PROPERLY
    // const config = {
    //     headers: {"Content-Type": "application/json"}
    // }
    // const data ={
    //     merkle_root: verificationResponse.merkle_root,
    //     nullifier_hash: verificationResponse.nullifier_hash,
    //     action_id: "wid_ec8bd79e5cce32c45c93f724f887acf8",
    //     signal:  account,
    //     proof: verificationResponse.proof
    // }

    // axios.post('https://developer.worldcoin.org/api/v1/verify', data, config)
    //     .then(res =>{
    //         console.log(res.data)
    axios
      .post("https://woosh-backend.herokuapp.com/user/bind", {
        address: account,
        worldcoin_hash: verificationResponse.nullifier_hash,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  // )
  // .catch(err => console.log(err))
  // }

  return (
    <>
      <div className="container">
        <Header>
          <img src="/assets/settings-icon.svg" alt="Settings" />
        </Header>
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-thin w-4/5">Verify that you're human</p>
          <p className="text-base font-normal w-4/5">
            To avoid spam and fake accounts we integrate with Worldcoin to
            verify that you are a human being.
          </p>
        </div>
        <WorldIDWidget
          actionId="wid_e426f4eb3674f6f12211da20f12346c0" // obtain this from developer.worldcoin.org
          signal={account}
          enableTelemetry
          onSuccess={(verificationResponse) =>
            completeVerification(verificationResponse)
          } // you'll actually want to pass the proof to the API or your smart contract
          onError={(error) => console.error(error)}
        />
        <p className="text-sm font-normal text-center border-spacing-10">
          I don't have a WorldCoin WorldID.
        </p>
        {/* <div className="w-full h-[1px] bg-white/10 mt-8 mb-6" /> */}
      </div>
      {/* <Navbar /> */}
    </>
  );
};

export default Verify;
