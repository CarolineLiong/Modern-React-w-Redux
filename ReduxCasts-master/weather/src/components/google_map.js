import React, { Component } from "react";

class GoogleMap extends Component {
  //componentDidMount is called right after the rendering 
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  //ref system from react - get a direct reference to what's shown in the scren w/ this.refs.map
  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
