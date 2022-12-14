import { useContext, useEffect, useState } from "react";

import Button from "../global/Button";
import ConfirmSend from "../payment/ConfirmSend";
import Confirmation from "../Confirmation";
import Header from "../layout/Header";
import MoneyInput from "../payment/MoneyInput";
import SelectContact from "../contacts/SelectContact";
import TextLink from "../global/TextLink";
import { ethers } from "ethers";
import { transferDAI } from "../../services/web3_methods";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";

const Send = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [amount, setAmount] = useLocalStorage("amount", "");
  const [recipient, setRecipient] = useLocalStorage(
    "recipient",
    "0x9B7c18a71a98acD2f1271e2D1fe63750A70bC52B"
  );
  const { account, balance, setBalance } = useContext(userContext);
  useEffect(() => {
    console.log(account);
  }, [step]);

  const executeTransaction = (event) => {
    event.preventDefault();
    console.log("sending");
    console.log(amount, recipient, account);
    transferDAI(recipient, amount, account)
      .then((result) => {
        console.log("TX amount: ", amount, "to: ", recipient);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container h-screen overflow-hidden flex flex-col justify-between pb-6">
        <Header noLogo>
          <div>
            <img
              src="/assets/qr-scanner.svg"
              className={step < 3 ? "block" : "hidden"}
            />
          </div>
          <div onClick={() => navigate("/home")}>
            <img src="/assets/close.svg" />
          </div>
        </Header>

        {step <= 1 && <MoneyInput setAmount={setAmount} reqCredits />}
        {step === 2 && (
          <SelectContact setRecipient={setRecipient} amount={amount} />
        )}
        {step === 3 && <ConfirmSend amount={amount} />}
        {step === 4 && <Confirmation amount={amount} recipient={recipient} />}

        <div
          className={`w-full flex ${
            step === 1 ? "justify-end" : "justify-between"
          } items-center`}
        >
          <div
            className={step === 1 || step === 4 ? "hidden" : "block"}
            onClick={() => {
              setStep(step - 1);
            }}
          >
            <TextLink>Back</TextLink>
          </div>
          {/*Next button*/}
          <div
            className={step === 4 ? "hidden" : "block"}
            onClick={(e) => {
              if (step === 3) {
                console.log("here");
                executeTransaction(e);
                setStep(step + 1);
              } else {
                setStep(step + 1);
              }
            }}
          >
            <Button size={step === 4 ? "lg" : "md"}>
              <div className="flex gap-2 justify-center">
                <span className="leading-none">
                  {step === 3 ? "Send" : "Next"}
                </span>
                <img
                  src="assets/arrow.svg"
                  className={`${step === 4 ? "hidden" : "block"} ${
                    step === 3 ? "rotate-[-45deg]" : "rotate-0"
                  } mt-1`}
                />
              </div>
            </Button>
          </div>
          {/*Confirm button*/}
          <div
            onClick={() => {
              navigate("/home");
            }}
            className={`${step !== 4 ? "hidden" : "block"} w-full`}
          >
            <Button size={step === 4 ? "lg" : "md"}>
              <div className="flex gap-2 justify-center">
                <span className="leading-none">Close</span>
                <img
                  src="assets/arrow.svg"
                  className={`${step === 4 ? "hidden" : "block"} ${
                    step === 3 ? "rotate-[-45deg]" : "rotate-0"
                  } mt-1`}
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Send;
