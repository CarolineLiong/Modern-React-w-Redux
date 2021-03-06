import React from 'react';
import VideoListItem from './video_list_item';
//the VideoList component - doesn't have a need for state
//doesn't rerender itself so just make a functional component

//props are the properties that are given to VideoList from video_list
const VideoList = (props) => {
  //props.videos is an array = creates an array called videoItems that creates
  // a component from each element in the props.video array and stores it into
  // the videoItems array

  //simple version:
  // var array = [1,2,3];
  //array.map(function(number) {return number*2}); returns [2,4,6]
  //or array.map((number) => {return number*2});
  //props.videos is an array of videos
  //videoItems is an array of videoListItem components

  //props.onVideoSelect was passed down from the App component in index.js
  //we move it down further into VideoListItem
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
