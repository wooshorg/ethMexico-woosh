const ContactList = (props) => {
  const contacts = [
    {
      user: 'user1.lens',
      email: 'user@email.com',
    },
    {
      user: 'user2.lens',
      email: 'user@email.com',
    },
    {
      user: 'user3.lens',
      email: 'user@email.com',
    },
    {
      user: 'user4.lens',
      email: 'user@email.com',
    },
    {
      user: 'user5.lens',
      email: 'user@email.com',
    },
    {
      user: 'user6.lens',
      email: 'user@email.com',
    },
  ];
  return (
    <div>
      <h2 className="mb-6">Your contacts (48)</h2>
      <div
        className={`flex gap-6 flex-col ${
          props.truncate ? 'h-[15rem]' : 'h-[30rem]'
        } overflow-scroll`}
      >
        {contacts.map((c, i) => (
          <div className="flex items-center gap-4 py-2 px-4" key={i}>
            <div className="w-8 h-8 bg-white rounded-full" />
            <div className="flex flex-col">
              <span>{c.user}</span>
              <span className="text-sm text-white/70">{c.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
