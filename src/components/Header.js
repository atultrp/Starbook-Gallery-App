import React from 'react'
import { authUser } from '../firebase/config'

const Header = () => {

    const handleClick = () => {
        authUser.signOut();
    }

    return (
        <div>
            <button className="btn btn-primary float-end me-2" onClick={handleClick}>Logout</button>
            <div className="container text-center my-3">
                <h2 className='my-3 h3'>Pictures Collection</h2>
                <p className='my-3 lead'>Upload you pictures collection here by clicking the upload button. Click on images to overview the full image.</p>
            </div>
        </div>
    )
}

export default Header