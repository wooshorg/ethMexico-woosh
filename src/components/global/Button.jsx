const Button = (props) => {
  const buttonSizes = { sm: 'py-2 px-6', md: 'py-4 p-10', lg: 'w-100% py-4' };

  const buttonStyles = {
    primary:
      'bg-primary text-black border-primary border-2 hover:bg-white hover:border-white hover:text-dark',
    outline:
      'border-primary border-2 bg-transparent hover:bg-primary hover:text-black',
    disabled: 'bg-[#848484]',
  };

  return (
    <>
      <div className={`${props.size === 'lg' ? 'block' : 'flex'}`}>
        <a href={props.link ? props.link : '#'}>
          <div
            className={`rounded-100vw text-center transition-all duration-300 ${
              props.style ? buttonStyles[props.style] : buttonStyles.primary
            } ${props.size ? buttonSizes[props.size] : buttonSizes.md}`}
          >
            {props.children}
          </div>
        </a>
      </div>
    </>
  );
};

export default Button;
