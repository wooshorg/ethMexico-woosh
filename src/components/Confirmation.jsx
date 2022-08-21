const Confirmation = (props) => {
  const transactionData = {
    amount: props.amount,
    to: 'user.lens',
    transcationAddress: '0x85hirf093',
    remainingCredits: 4,
  };
  const { amount, user, transcationAddress, remainingCredits } =
    transactionData;
  return (
    <div className="flex flex-col items-center">
      <img src="/assets/confirm.svg" className="w-16 h-16 mb-4" />
      <span className="mb-2 text-xl font-normal">
        {props.request ? `You've requested` : `You sent`}
      </span>
      <span className="mb-4 text-3xl font-normal">${amount.toFixed(2)}</span>
      <span className="mb-1">
        {props.request ? 'From' : 'To'}: {user}
      </span>
      {!props.request && (
        <span className="mb-4 text-sm">
          Transaction address: {transcationAddress}
        </span>
      )}
      {!props.request && <span>You have {remainingCredits} credits left</span>}
    </div>
  );
};
export default Confirmation;
