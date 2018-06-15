import _ from 'lodash';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAEy8jNOTRXZFssIAbQs96MDUKlgNggSKY';

// the most parent component should fetch the data


// Create a new component. This component should produce some HTML

//const is a ES6 piece of synthax -declaring a variable (the final variable that shouldn't change
// therefore a const - never going to reassign App)
//HTML in return statement is JSX  - looks like HTML but its Javascript


//this is a component class, not instance
//const App = function(){
//    return <div>Hi!</div>;
//}

//this is equivalent to the function above => equals function()
//this is a functional component
//const App = () => {
//  return (
//    <div>
//    </div>
//}
//class based component of App
class App extends Component {

  constructor(props) {
    super(props);

    //initialize the state
    this.state = {
      videos: [],
      selectedVideo: null
    };
    //start the search
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    //start the search (data is a var name)
    //videos is the list of videos that we got from the search
    //the selectedVideo is the first searched video
    YTSearch({key: API_KEY, term: term}, (videos) =>  {
      //this.setState({ videos: videos}); is the same as
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });

  }
  render() {
    //debounce takes the inner function that and only run it every 300 miliseconds 
    const videoSearch  = _.debounce((term)=> {this.videoSearch(term)}, 300)
    return (
      //passing videos into VideoList
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
// create an instance of App by writing <App></App> or simply <App />
// render App onto the page through container in index.html
ReactDOM.render(<App />, document.querySelector('.container'));
