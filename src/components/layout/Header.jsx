const Header = (props) => {
  return (
    <>
      <div className="flex justify-between items-center py-4">
        {!props.noLogo && (
          <a href="/home">
            <img
              src="/assets/logo.svg"
              alt="Woosh logo"
              className="cursor-pointer"
            />
          </a>
        )}
        {props.children}
      </div>
    </>
  );
};

export default Header;
