import Button from '../global/Button';
import axios from 'axios';
import { magic } from '../../services/magic';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userContext } from '../../context/userContext';
import { web3 } from '../../services/web3';

const MagicLogin = () => {
  const { setAccount } = useContext(userContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const checkWorldID = async (address) => {
    // Make a request for a user with a given ID
    console.log('CheckworldId()', address);
    axios
      .get(`https://woosh-backend.herokuapp.com/user/retrieve/${address}`)
      .then((response) => {
        console.log('axios get', response);
        if (response.data.worldcoin_hash !== undefined) {
          console.log('world coin hash: ', response.data.worldcoin_hash);
          //set account in context
          navigate('/home');
        } else {
          navigate('/verify');
        }
      })
      .catch((error) => {
        // handle error
        console.log('This is an error', error);
        navigate('/verify');
      });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      let result = await magic.auth.loginWithMagicLink({ email: email });
      if (magic.user) {
        web3.eth
          .getAccounts()
          .then((accounts) => {
            setAccount(accounts?.[0]);
            console.log('Set account address:  ', accounts[0]);
            checkWorldID(accounts?.[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const login = async () => {
  //   web3.eth
  //     .getAccounts()
  //     .then((accounts) => {
  //       setAccount(accounts?.[0]);
  //       console.log("Set account address:  ", accounts[0]);
  //       checkWorldID(accounts?.[0]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <>
      {/* <button onClick={handleLogin} className="button-row">
        Enter Woosh
      </button> */}
      <div className="flex flex-col gap-3 mb-16 mt-[6.5rem] ">
        <p className="text-3xl">Continue with email</p>
        <p>
          If you have an account you'll get a login email. If not, we'll sign
          you up!
        </p>
      </div>
      <form onSubmit={handleLogin} action="#">
        <div className="flex gap-4">
          <input
            aria-label="Email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="paige@whoosh.com"
            value={email}
            className="w-full rounded-100vw px-6 py-4 text-black focus:outline-none"
          />
          <Button>
            <button type="submit">Send</button>
          </Button>
        </div>
      </form>
    </>
  );
};

export default MagicLogin;
