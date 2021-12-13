import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import UploadForm from './components/UploadForm';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='container'>
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;