import { useState, useEffect, useContext } from 'react';
import { userContext } from '../context/userContext';
import { searchProfile } from '../lib/lens/searchProfile';
import { addContact } from '../lib/lens/addContact';
import Header from './layout/Header';
import Search from './contacts/Search';
import Navbar from './layout/Navbar';
import SearchResults from './contacts/SearchResults';

const AddContact = () => {
  const [handle, setHandle] = useState(null);
  const [results, setResults] = useState([]);
  const [newContactId, selectContact] = useState(null);

  const lookForProfile = async () => {
    if (handle === null) {
      console.log('type a profile name first!!');
      return;
    }

    const result = await searchProfile(handle);
    const response = (result && result.search) || null;
    const status = (response && response.__typename) || null;

    if (status === 'ProfileSearchResult') {
      let profiles = [];
      response.items.map((item) => {
        console.log('>> item: ', item);
        profiles.push({
          profileId: item.profileId,
          handle: item.handle,
          isContact: item.isFollowedByMe,
          picture:
            (item.picture &&
              item.picture.original &&
              item.picture.original.url) ||
            null,
        });

        setResults((t) => {
          return profiles;
        });

        // TODO: replace by UI selection
        selectContact(profiles[0].profileId);
      });
    } else {
      setResults((t) => {
        return [];
      });
      selectContact(null);
    }
  };

  const addNewContact = async () => {
    if (newContactId === null) {
      console.log('select a contact first!!');
      return;
    }

    console.log('>> contact to add: ', newContactId);
    await addContact(newContactId);
  };

  return (
    <>
      <div className="container">
        <Header>
          <img src="/assets/settings-icon.svg" alt="Settings" />
        </Header>
        <div className="flex justify-between items-center mt-12">
          <div className="flex flex-col">
            <h1 className="text-2xl leading-none">New contact</h1>
          </div>
        </div>
        <div className="pt-10 pb-8">
          <Search />
        </div>
      </div>

      <input
        type="text"
        id="profileHandle"
        onChange={(event) => setHandle(event.target.value)}
        name="profileHandle"
        required
        minLength="6"
        maxLength="32"
        size="10"
      />

      <button onClick={lookForProfile}>Search profile</button>

      <button onClick={addNewContact}>Add contact</button>

      <Navbar />
    </>
  );
};
export default AddContact;
