import MagicLogin from '../auth/MagicLogin';
import { userContext } from '../../context/userContext';

const Landing = () => {
  const { account } = userContext;
  return (
    <>
      <div className="h-screen flex flex-col justify-end py-8 px-4">
        <div className="flex flex-col gap-12 items-center justify-center text-center grow">
          <img
            src="./assets/logo-full.svg"
            alt="Woosh Logo"
            className="w-[13.75rem]"
          />
          <div className="flex flex-col gap-4">
            <p className="text-lg font-normal w-[24ch]">
              Send, receive and request money to anywhere at anytime
            </p>
            <p>Powered by Ethereum</p>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-2">Sign up now and receive 5 free credits!</p>
          {!account && <MagicLogin />}
        </div>
      </div>
    </>
  );
};
export default Landing;
