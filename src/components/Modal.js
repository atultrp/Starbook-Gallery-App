import React from 'react';
import Slide from 'react-reveal/Slide';

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <div className='backdrop d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }} onClick={handleClick}>
            <Slide top>
                <img src={selectedImg} alt="Enlarged Picture" />
            </Slide>
        </div>
    )
}

export default Modal;