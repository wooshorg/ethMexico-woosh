import * as Switch from '@radix-ui/react-switch';

import Button from '../global/Button';
import { enableYield } from '../../services/web3_methods';

const ProfileOverview = () => {
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
            <span>user.lens</span>
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
