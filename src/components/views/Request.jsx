import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../layout/Header';
import MoneyPad from '../MoneyInput';
import Button from '../global/Button';
import TextLink from '../global/TextLink';
import SelectContact from '../SelectContact';
import ConfirmSend from '../ConfirmSend';
import Confirmation from '../Confirmation';

const Request = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <div className="container h-screen  flex flex-col justify-between pb-6">
        <Header noLogo>
          <div>
            <div
              className={step === 1 || step === 3 ? 'hidden' : 'block'}
              onClick={() => {
                setStep(step - 1);
              }}
            >
              <TextLink>Back</TextLink>
            </div>
          </div>
          <div onClick={() => navigate('/home')}>
            <img src="/assets/close.svg" />
          </div>
        </Header>
        {step <= 1 && <MoneyPad noRefuel />}
        {step === 2 && <SelectContact request />}
        {step === 3 && <Confirmation request />}
        <div
          className={`w-full flex ${
            step === 1 ? 'justify-end' : 'justify-between'
          } items-center`}
        >
          {/*Next button*/}
          <div
            className={step === 1 ? 'block' : 'hidden'}
            onClick={() => {
              if (step !== 4) {
                setStep(step + 1);
              }
            }}
          >
            <Button>
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

          <div
            className={`w-full flex flex-col gap-4 ${
              step === 1 ? 'hidden' : 'block'
            }`}
          >
            <div
              className={`${
                step === 1 || step === 3 ? 'hidden' : 'block'
              } w-full`}
            >
              <Button size="lg" style="outline">
                <div className="flex gap-2 justify-center">
                  <span className="leading-none">Copy request link</span>
                </div>
              </Button>
            </div>
            <div
              className={`${step === 1 ? 'hidden' : 'block'} w-full`}
              onClick={() => {
                if (step !== 3) {
                  setStep(step + 1);
                } else {
                  navigate('/home');
                }
              }}
            >
              <Button size="lg">
                <div className="flex gap-2 justify-center">
                  <span className="leading-none">
                    {step === 3 ? 'Close' : 'Send request'}
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;
