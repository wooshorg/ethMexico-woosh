const MoneyInput = () => {
  const keyInputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '<'];

  return (
    <>
      <div className="text-center">
        <span className="text-xl font-normal">Enter your pin</span>
      </div>
      <div className="grid grid-cols-3 gap-x-[5rem] gap-y-[2.5rem] mt-10 w-full place-items-center">
        {keyInputs.map((k, i) => (
          <div
            key={i}
            className="w-10 h-10 flex items-center justify-center text-2xl cursor-pointer hover:text-primary transition-colors"
          >
            {k}
          </div>
        ))}
      </div>
    </>
  );
};

export default MoneyInput;
