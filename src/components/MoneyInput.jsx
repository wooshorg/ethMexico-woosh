import Button from './global/Button';
import { useEffect, useState } from 'react';
import { render } from '@testing-library/react';

const MoneyInput = (props) => {
  const { setAmount } = props;
  const keyInputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ' . ', '<'];
  const [userAmount, setUserAmount] = useState('0');

  useEffect(() => {
    setAmount(userAmount);
  }, [userAmount]);

  const addSum = (char) => {
    if (char == '<') {
      setUserAmount(userAmount.slice(0, -1));
    } else if (userAmount === '0') {
      setUserAmount(char);
    } else {
      setUserAmount(userAmount.toString() + char);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col items-center gap-6">
          <span className="text-3xl leading-none">${userAmount}</span>
          <span>You have 5 credits left</span>
          <Button size="sm">
            <p className="leading-none">Refuel</p>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-x-[5rem] gap-y-[2.5rem] mt-16 w-full place-items-center">
          {keyInputs.map((k, i) => (
            <div
              key={i}
              onClick={() => addSum(k)}
              className="w-10 h-10 flex items-center justify-center text-2xl cursor-pointer hover:text-primary transition-colors"
            >
              {k}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoneyInput;
