import Button from '../global/Button';

const Request = () => {
  const requestData = {
    user: 'user.lens',
    amount: 50,
    paymentLink: '#',
  };
  const { user, amount } = requestData;
  return (
    <div className="bg-black rounded-[.5rem] flex gap-5 px-4 py-3 w-[90%] mx-auto">
      <div className="w-16 h-16 rounded-full bg-white mt-4" />
      <div className="flex flex-col">
        <span>{user}</span>
        <span>requested</span>
        <span className="text-xl mb-2">${amount.toFixed(2)}</span>
        <Button size="sm" link="/pay-request">
          Pay
        </Button>
      </div>
    </div>
  );
};

export default Request;
