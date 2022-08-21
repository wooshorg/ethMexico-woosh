import Search from './Search';
import ContactList from './ContactList';

const SelectContact = (props) => {
  const {setRecipient, amount} = props
  const topContacts = [
    {
      user: 'user1.lens',
      profilePic: 'none',
    },
    {
      user: 'user2.lens',
      profilePic: 'none',
    },
    {
      user: 'user3.lens',
      profilePic: 'none',
    },
    {
      user: 'user4.lens',
      profilePic: 'none',
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center mb-6">
        <span>You're sending</span>
        <span className="text-3xl font-normal">${amount}</span>
        <span className="text-xl font-normal">Who are you sending to?</span>
      </div>

      <h2>Most used contacts</h2>
      <div className="flex justify-between mt-4 mb-8">
        {topContacts.map((c, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 bg-white rounded-full" />
            {c.user}
          </div>
        ))}
      </div>
      <div className="mb-8">
        <Search />
      </div>
      <ContactList truncate />
    </div>
  );
};

export default SelectContact;
