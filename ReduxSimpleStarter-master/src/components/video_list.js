import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  //props.videos is an array = creates an array called videoItems that creates
  // a component from each element in the props.video array and stores it into
  // the videoItems array
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key ={video.etag}
        video={video} />
    );
  });

  // return the new array videoItems and render it
  //when referencing javascript variables must use curly braces
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
