import { useState, useEffect, useContext } from 'react';
import { userContext } from '../../context/userContext';
import { getContacts } from '../../lib/lens/getContacts';

const ContactList = (props) => {
  const [contacts, setContacts] = useState([]);
  const { account } = useContext(userContext);

  const loadContacts = async () => {
    if (account === null) {
      return;
    }

    const result = await getContacts(account);
    const response = (result && result.following) || null;
    const status = (response && response.__typename) || null;
    let contactList = [];

    if (status === "PaginatedFollowingResult") {
      let contactList = [];
      response.items.map((item) => {
        const profile = item.profile;
        contactList.push({
          profileId: profile.profileId,
          user: profile.handle,
          picture: profile.picture && profile.picture.original && profile.picture.original.url || null,
          wallet: profile.ownedBy,
        });
      });

      setContacts((t) => {
        return contactList;
      });
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div>
      <h2 className="mb-6">Your contacts ({contacts.length})</h2>
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
              <span className="text-sm text-white/70">{c.wallet}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
