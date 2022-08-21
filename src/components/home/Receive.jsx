import MessagePopup from '../MessagePopup';

const Receive = () => {
  const receiveData = {
    user: 'user.lens',
    amount: 50,
    message: 'Happy birthday',
  };
  const { user, amount, message } = receiveData;
  return (
    <div className="bg-black rounded-[.5rem] flex gap-5 px-4 py-3 w-[90%] mx-auto">
      <div className="w-16 h-16 rounded-full bg-white mt-4" />
      <div className="flex flex-col">
        <span>{user} sent you</span>
        <span className="text-xl">${amount.toFixed(2)}</span>
        <span className="mb-4">{message}</span>
        <MessagePopup thanks />
      </div>
    </div>
  );
};

export default Receive;
