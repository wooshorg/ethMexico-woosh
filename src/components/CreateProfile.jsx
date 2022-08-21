import { useState, useEffect, useContext } from 'react';
import { userContext } from '../context/userContext';
import { createProfile } from '../lib/lens/createProfile';
import { onFilePicked, uploadFile } from '../lib/fileManager';
import Button from './global/Button';
import { useNavigate } from 'react-router-dom';
import Header from './layout/Header';

const Profile = () => {
  const navigate = useNavigate();
  const [handle, setHandle] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { account } = useContext(userContext);

  const suggestedUsernames = ['user1.lens', 'usera.lens', 'user0.lens'];

  const createLensProfile = async () => {
    if (handle === null) {
      console.log('select a profile name first!!');
      return;
    }

    const result = await createProfile(handle, imageUrl);
    const response = (result && result.createProfile) || null;
    const status = (response && response.__typename) || null;

    console.log('>> response :', response);
    let errorReason = '';
    let errorMessage = '';
    if (status === 'RelayError') {
      errorReason = response.reason || 'Unknown Error';
      console.log('>> errorReason: ', errorReason);

      if (errorReason === 'HANDLE_TAKEN') {
        errorMessage = 'Profile name is taken';
      } else {
        errorMessage = 'Unknown error happened';
      }

      console.log(errorMessage);

      // TODO: show error dialog
      return;
    } else if (status === 'RelayerResult') {
      // TODO: redirect to success response
      console.log('Profile created successfully');
      navigate('/home');
    }
  };

  const onUploadFile = async () => {
    let profileImageUrl = await uploadFile();
    setImageUrl(profileImageUrl);
  };

  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="flex flex-col gap-3 mb-16 mt-[3rem] ">
          <p className="text-3xl">Choose a username</p>
          <p>So people can easily find you!</p>
        </div>
        {/* 
      <input type="file" accept="image/*" onChange={onFilePicked} />

      <a
        className="connect"
        onClick={onUploadFile}
        href="#"
        rel="noopener noreferrer"
      >
        Upload
      </a>
      <br /> */}

        <input
          type="text"
          id="profileHandle"
          onChange={(event) => setHandle(event.target.value)}
          name="profileHandle"
          required
          minLength="6"
          maxLength="32"
          size="10"
          placeholder="@something.lens"
          className="w-full rounded-100vw px-6 py-4 bg-white text-black focus:outline-none relative after:text-black after:absolute after:left-0 after:top-0 after:content-['@']"
        />

        <p className="mb-4 mt-20">Available usernames</p>
        <div className="flex gap-3 mb-20">
          {suggestedUsernames.map((u, i) => (
            <div
              className="text-dark bg-white py-2 px-6 rounded-100vw cursor-pointer hover:bg-primary transition-colors"
              key={i}
            >
              {u}
            </div>
          ))}
        </div>

        <div onClick={createLensProfile}>
          <Button size="lg">Next</Button>
        </div>
      </div>
    </>
  );
};
export default Profile;
