import { useState, useEffect, useContext } from "react";
import { userContext } from "../context/userContext";
import { createProfile } from "../lib/lens/createProfile"
import { onFilePicked, onUploadFile } from '../lib/fileManager';

const Profile = () => {
  const [transactions, setTransactions] = useState([]);
  const {account} = useContext(userContext);

  const createLensProfile = async () => {
    let handle = "temo-1-test";
    let imageUrl =  "https://ipfs.io/ipfs/bafybeih7637dxdp24nja5forxdhlmil5xaenrm2snn4s62ygktnrwqysyq/Temo.png";
    createProfile(handle, imageUrl);
  };

  return (
    <>
      <h1>Create profile</h1>

        <input
          type="file"
          accept="image/*"
          onChange={onFilePicked}/>

        <a
          className="connect"
          onClick={onUploadFile}
          href="#"
          rel="noopener noreferrer"
        >
          Upload
        </a>

      <button onClick={createLensProfile} className="button-row">
          Create profile
      </button>
    </>
  )
}
export default Profile; 