const TextLink = (props) => {
  return (
    <>
      <div className="flex opacity-70">
        <a
          href={props.link ? props.link : '#'}
          className="flex flex-col items-center"
        >
          <div className="px-4">{props.children}</div>
          <div className="w-full h-[2px] bg-white" />
        </a>
      </div>
    </>
  );
};

export default TextLink;
