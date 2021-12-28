import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import RegistorUser from './components/RegistorUser';
import UploadForm from './components/UploadForm';
import { authUser } from './firebase/config';

function App(props) {
  const [selectedImg, setSelectedImg] = useState(null);

  const [user, setUser] = useState([]);

  const authListener = () => {
    authUser.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }

  useEffect(() => {
    authListener();
  })

  return (
    <>
      <h1 className='h4 my-3 mx-4 text-muted'>Starbook Gallery</h1>
      {user ?
        (<>
          <Header />
          <div className='container text-center'>
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
          </div>
        </>)
        : (<RegistorUser />)}
    </>
  );
}

export default App;