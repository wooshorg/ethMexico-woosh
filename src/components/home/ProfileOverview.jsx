import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import * as Switch from '@radix-ui/react-switch';
import Button from '../global/Button';
import { enableYield } from '../../services/web3_methods';
import { userContext } from '../../context/userContext';

const ProfileOverview = () => {
  const [profile, setProfile] = useState({
    handle: ''
  });
  const { account } = useContext(userContext);

  const loadUserProfile = async () => {
    axios
      .get('https://woosh-backend.herokuapp.com/user/retrieve/'+account)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          setProfile({
            handle: response.data.username
          });
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });

  };

  useEffect(() => {
    loadUserProfile();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-6 mt-6">
        <div className="flex flex-col items-center gap-2">
          <img
            alt="profilepic"
            src="/assets/profile-pic-empty.png"
            className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
          />
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-regular">$1,424.23</span>
              <div className="flex justify-center  h-5 w-5 rounded-full border border-white">
                <span className="text-primary leading-none mt-[-1px]">+</span>
              </div>
            </div>
            <span>{profile.handle}</span>
            <div className="flex items-center gap-2">
              <span>Earn 7% on your money</span>
              <div onClick={enableYield}>
                <Switch.Root className="w-8 h-4 bg-[#C4C4C4] rounded-100vw relative radix-state-checked:bg-primary">
                  <Switch.Thumb className="block w-4 h-4 rounded-full bg-white radix-state-checked:translate-x-4 radix-state-unchecked:translate-x-0 transition duration-200" />
                </Switch.Root>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <Button style="outline" link="/request">
            Request Money
          </Button>
          <Button link="/send">Send Money</Button>
        </div>
      </div>
    </>
  );
};

export default ProfileOverview;
