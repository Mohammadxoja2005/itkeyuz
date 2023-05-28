import React, { FC } from 'react'
import ReactPlayer from 'react-player';
// import video from "../../../assets/img/" 

const BACKGROUNDVIDEO: FC = () => {
    return (
        <video
            autoPlay
            loop
            muted
            style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: "100%", height: "100%", objectFit: "cover" }}
        >
            <source src="/background.mp4" type="video/mp4" />
        </video>

    )
}

export default BACKGROUNDVIDEO