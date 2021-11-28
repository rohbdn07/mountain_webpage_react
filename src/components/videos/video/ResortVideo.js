import React from 'react';
import './styles.css';

const ResortVideo = () => (
  <div className="video-responsive">
    <iframe
      width="50"
      height="100"
      src={`https://vod-progressive.akamaized.net/exp=1638132819~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F658%2F15%2F378294537%2F1581500373.mp4~hmac=a6fa65ed799d18b21a9f65bee048a6ac3ab96710b280ec06f491c7f00690db27/vimeo-prod-skyfire-std-us/01/658/15/378294537/1581500373.mp4?filename=Ski+Hill+-+29951.mp4`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded youtube"
    />
  </div>
);

// ResortVideo.propTypes = {
//   embedId: PropTypes.string.isRequired
// };

export default ResortVideo;
