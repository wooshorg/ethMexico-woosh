const Header = (props) => {
  return (
    <>
      <div className="flex justify-between items-center py-4">
        <a href="/home">
          <img
            src="/assets/logo.svg"
            alt="Woosh logo"
            className="cursor-pointer"
          />
        </a>
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default Header;
