const Confirmation = (props) => {
  const transactionData = {
    amount: props.amount,
    to: 'user.lens',
    transcationAddress: '0x85hirf093',
    remainingCredits: 4,
  };
  const { amount, to, transcationAddress, remainingCredits } = transactionData;
  return (
    <div className="flex flex-col items-center">
      <img src="/assets/confirm.svg" className="w-16 h-16 mb-4" />
      <span className="mb-2 text-xl font-normal">You sent</span>
      <span className="mb-4 text-3xl font-normal">${amount}</span>
      <span className="mb-1">To: {to}</span>
      <span className="mb-4 text-sm">
        Transaction address: {transcationAddress}
      </span>
      <span>You have {remainingCredits} credits left</span>
    </div>
  );
};
export default Confirmation;
