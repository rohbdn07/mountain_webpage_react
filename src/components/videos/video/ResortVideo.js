import React from 'react';
import { useFetchYoutube } from '../../../hooks/youtube/useFetchYoutube';
import './styles.css';

/**
 *@description Component that calls the custom hook useFetchYoutube 
 to fetch the video from the API and render it.
 * @returns {JSX.Element}  JSX element.
 */
const ResortVideo = () => {
  const { youtubeVideo } = useFetchYoutube();
  const playYoutubeVideo = youtubeVideo.video;
  return (
    <>
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={playYoutubeVideo}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    </>
  );
};

export default ResortVideo;
