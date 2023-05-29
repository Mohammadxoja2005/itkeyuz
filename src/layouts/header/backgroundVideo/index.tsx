import React, { FC } from 'react'
import ReactPlayer from 'react-player';
// import video from "../../../assets/img/" 

const BACKGROUNDVIDEO: FC = () => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            style={{ position: 'absolute', top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1.5 }}
        >
            <source src="/background.mp4" type="video/mp4" />
        </video>

    )
}

export default BACKGROUNDVIDEO