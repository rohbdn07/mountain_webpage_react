import React from 'react';
import './styles.css';

const ResortVideo = () => (
  <div className="video-responsive">
    <iframe
      width="50"
      height="100"
      src={
        'https://vod-progressive.akamaized.net/exp=1638147575~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F222%2F20%2F501113762%2F2282796476.mp4~hmac=1be6deb605738cc1e7d66f1fb671ced62dc4fcfae7dcdb6aadcf6b9969c6b19d/vimeo-prod-skyfire-std-us/01/222/20/501113762/2282796476.mp4?filename=Skiing+-+61887.mp4'
      }
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded youtube"
      autoPlay="true"
      loop="true"
      muted="true"
    />
  </div>
);

// ResortVideo.propTypes = {
//   embedId: PropTypes.string.isRequired
// };

export default ResortVideo;
