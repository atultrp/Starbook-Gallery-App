import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const fileType = ['image/jpeg', 'image/png'];

    const handleChange = (e) => {
        let selected = e.target.files[0]; // This stores all the property of selected file in selected variable.

        if (selected && fileType.includes(selected.type)) {
            setFile(selected);
            setError(null);
            console.log(file);
        } else {
            setFile(null);
            setError("Please select an image file (png/jpeg)");
        }

    }

    return (
        <>
            <div className="input-group mb-3 btn btn-info btn-file">
                Upload Image..
                <input type="file" className="form-control" id="inputGroupFile02" name="upfile" onChange={handleChange} />
            </div>
            <div className="output">
                {error && <div className='text-danger'>{error}</div>}
                {file && <div className='text-success'>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </>
    )
}

export default UploadForm
