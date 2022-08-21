const Navbar = () => {
  const links = [
    {
      name: 'Home',
      link: '/home',
      iconSrc: '/assets/home.svg',
    },
    {
      name: 'Notifications',
      link: '/home',
      iconSrc: '/assets/notification.svg',
    },
    {
      name: 'Contacts',
      link: '/home',
      iconSrc: '/assets/contacts.svg',
    },
    {
      name: 'Account',
      link: '/home',
      iconSrc: '/assets/account.svg',
    },
  ];

  return (
    <>
      <div className="flex justify-between bg-white py-4 px-6 mt-8 rounded-t-[1rem]">
        {links.map((l, i) => (
          <a href={l.link} key={i}>
            <div className="flex items-center flex-col gap-2">
              <img src={l.iconSrc} alt={l.name} className="h-6" />
              <span className="text-dark leading-none">{l.name}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
