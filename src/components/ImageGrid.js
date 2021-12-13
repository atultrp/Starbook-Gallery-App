import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ({setSelectedImg}) => {
    const {docs} = useFirestore('images');

    return (
        <div className='row'>
            {docs && docs.map(doc => (
                <div className="img-wrap col-md-4" key={doc.id} onClick={()=>{
                    setSelectedImg(doc.url);
                    console.log(setSelectedImg(doc.url));
                }}>
                    <img src={doc.url} alt="Uploaded Images" className='mx-2 my-3'/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid