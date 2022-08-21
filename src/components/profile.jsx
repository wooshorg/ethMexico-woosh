import { useState, useEffect, useContext } from "react";
import { userContext } from "../context/userContext";
import { createProfile } from "../lib/lens/createProfile";
import { onFilePicked, uploadFile } from '../lib/fileManager';

const Profile = () => {
  const [handle, setHandle] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { account } = useContext(userContext);

  const createLensProfile = async () => {
    if(handle === null) {
      console.log("select a profile name first!!");
      return;
    }

    const result = await createProfile(handle, imageUrl);
    const response = result && result.createProfile || null;
    const status = response && response.__typename || null;

    console.log(">> response :", response);
    let errorReason = "";
    let errorMessage = "";
    if (status === "RelayError") {
      errorReason = response.reason || 'Unknown Error';
      console.log(">> errorReason: ", errorReason);

      if(errorReason === 'HANDLE_TAKEN') {
        errorMessage = "Profile name is taken";
      } else {
        errorMessage = "Unknown error happened";
      }

      console.log(errorMessage);

      // TODO: show error dialog
      return;
    } else if (status === "RelayerResult") {
      // TODO: redirect to success response
      console.log("Profile created successfully");
    }
  };

  const onUploadFile = async () => {
    let profileImageUrl = await uploadFile();
    setImageUrl(profileImageUrl);
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
      <br/>
      <span> Profile name </span>
      <input type="text" id="profileHandle" onChange={event => setHandle(event.target.value)} 
      name="profileHandle" required minLength="6" maxLength="32" size="10"/>

      <br/>
      <button onClick={createLensProfile}>
          Create profile
      </button>
    </>
  )
}
export default Profile; 