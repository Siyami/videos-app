import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} >
            <img src={video.snippet.thumbnails.medium.url} />
            {video.snippet.title}
        </div>
    )
}

export default VideoItem;