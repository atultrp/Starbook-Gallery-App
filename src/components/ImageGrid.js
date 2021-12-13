import React from 'react'
import useFirestore from '../hooks/useFirestore'
import Bounce from 'react-reveal/Bounce';


const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className='row'>
            {docs && docs.map(doc => (
                <div className="img-wrap col-md-4" key={doc.id} onClick={() => { setSelectedImg(doc.url); }} >
                    <Bounce top>
                    <img src={doc.url} alt="Uploaded Images" className='mx-2 my-3' />
                    </Bounce>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid