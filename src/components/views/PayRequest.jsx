import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../layout/Header';
import Button from '../global/Button';
import ConfirmSend from '../payment/ConfirmSend';
import Confirmation from '../Confirmation';

const PayRequest = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <div className="container h-screen overflow-hidden flex flex-col justify-between pb-6">
        <Header noLogo>
          <div></div>
          <div onClick={() => navigate('/home')}>
            <img src="/assets/close.svg" />
          </div>
        </Header>
        {step === 1 && <ConfirmSend />}
        {step === 2 && <Confirmation />}
        <div
          className={`w-full flex ${
            step === 1 ? 'justify-end' : 'justify-between'
          } items-center`}
        >
          {/*Next button*/}
          <div
            className={step === 2 ? 'hidden' : 'block'}
            onClick={() => {
              if (step !== 2) {
                setStep(step + 1);
              }
            }}
          >
            <Button size={step === 2 ? 'lg' : 'md'}>
              <div className="flex gap-2 justify-center">
                <span className="leading-none">
                  {step === 3 ? 'Send' : 'Next'}
                </span>
                <img
                  src="assets/arrow.svg"
                  className={`${step === 4 ? 'hidden' : 'block'} ${
                    step === 3 ? 'rotate-[-45deg]' : 'rotate-0'
                  } mt-1`}
                />
              </div>
            </Button>
          </div>
          {/*Confirm button*/}
          <div
            onClick={() => {
              navigate('/home');
            }}
            className={`${step !== 2 ? 'hidden' : 'block'} w-full`}
          >
            <Button size={step === 2 ? 'lg' : 'md'}>
              <div className="flex gap-2 justify-center">
                <span className="leading-none">Close</span>
                <img
                  src="assets/arrow.svg"
                  className={`${step === 2 ? 'hidden' : 'block'} ${
                    step === 3 ? 'rotate-[-45deg]' : 'rotate-0'
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

export default PayRequest;
