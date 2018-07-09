import React from 'react';

//parameter is props.video = {video}
const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video; is the same as ({video}) above with argument of the function as ()
  const imageUrl = video.snippet.thumbnails.default.url;
  //when the user clicks on the list of videos, it'll show that video
  return (
    <li onClick={() => onVideoSelect(video)} className = "list-group-item">
      <div className = "video-list media">
        <div className = "media-left">
          <img className = "media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className = "media-heading"> {video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
