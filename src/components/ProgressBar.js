import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = (props) => {

    const { file, setFile } = props;
    const { url, progress } = useStorage(file);
    console.log(progress, url);

    useEffect(() => {
        if(url){
            setFile(null);
        }
    }, [url, setFile])

    return (
        <div className='progress-bar progress-bar-striped bg-info mt-2' style={{width : progress + '%', height: "5px"}}>
        </div>
    )
}

export default ProgressBar
