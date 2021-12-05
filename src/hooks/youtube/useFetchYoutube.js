import React from 'react';
import YoutubeService from '../../services/youtube/YoutubeService';

/**
 * @description - It only shows youtube video on the client screen
 * only if youtube video is embeded in the strapi page.
 * @returns {object} isLoading, images and error).
 */
export const useFetchYoutube = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [youtubeVideo, setYoutubeVideo] = React.useState([]);
  const [url, setUrl] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    fetchYoutubeFromStrapi();
    console.log(url);
  }, [url]);

  const fetchYoutubeFromStrapi = async () => {
    setIsLoading(true);
    try {
      const { data } = await YoutubeService.get();

      setYoutubeVideo(data);
      setUrl(data.video);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { isLoading, youtubeVideo, error };
};
