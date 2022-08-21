import Button from '../global/Button';
import PinInput from './PinInput';

const ConfirmSend = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="flex flex-col gap-2 items-center">
          <span>You're sending</span>
          <span className="text-3xl font-normal">$50.00</span>
          <span>To: temo.lens</span>
          <span className="text-white/70">Cost: 1 credit</span>
        </div>
        <Button size="sm">
          <p className="leading-none">+ Add a message</p>
        </Button>
      </div>
      <PinInput />
    </div>
  );
};

export default ConfirmSend;
