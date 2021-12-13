import React from 'react'

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    return (
        <div className='backdrop d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }} onClick={handleClick}>
            <img src={selectedImg} alt="Enlarged Picture" />
        </div>
    )
}

export default Modal;