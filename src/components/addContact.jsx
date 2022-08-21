import { useState, useEffect, useContext } from "react";
import { userContext } from "../context/userContext";
import { searchProfile } from "../lib/lens/searchProfile";
import { addContact } from "../lib/lens/addContact";

const AddContact = () => {
  const [handle, setHandle] = useState(null);
  const [results, setResults] = useState([]);
  const [newContactId, selectContact] = useState(null);

  const lookForProfile = async () => {
    if(handle === null) {
      console.log("type a profile name first!!");
      return;
    }

    const result = await searchProfile(handle);
    const response = result && result.search || null;
    const status = response && response.__typename || null;

    if (status === "ProfileSearchResult") {
      let profiles = [];
      response.items.map((item) => {
        console.log(">> item: ", item);
        profiles.push({
          profileId: item.profileId,
          handle: item.handle,
          isContact: item.isFollowedByMe,
          picture: item.picture && item.picture.original && item.picture.original.url || null,
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
    if(newContactId === null) {
      console.log("select a contact first!!");
      return;
    }

    console.log(">> contact to add: ", newContactId);
    await addContact(newContactId);
  };


  return (
    <>
      <h1>Add contact</h1>

      <br/>
      <span> Profile name </span>
      <input type="text" id="profileHandle" onChange={event => setHandle(event.target.value)} 
      name="profileHandle" required minLength="6" maxLength="32" size="10"/>

      <br/>
      <button onClick={lookForProfile}>
          Search profile
      </button>

      <button onClick={addNewContact}>
          Add contact
      </button>
    </>
  )
}
export default AddContact; 