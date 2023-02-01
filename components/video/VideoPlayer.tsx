import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
    const [volume, setVolume] = useState(0.8);
    const [fullScreen, setFullScreen] = useState(false);

    return (
        <div className="relative bg-gray-900 rounded overflow-hidden">
            <ReactPlayer
                url={url}
                controls
                onFullScreen={() => setFullScreen(!fullScreen)}
                width="100%"
                height="100%"
            />
            <div className="absolute bottom-0 left-0 right-0  p-2 flex justify-between items-center">
                <button
                    className="text-gray-400 hover:text-white"
                    onClick={() => setFullScreen(!fullScreen)}
                >
                    <span
                        className={`fas fa-${
                            fullScreen ? "compress" : "expand"
                        }`}
                    />
                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
