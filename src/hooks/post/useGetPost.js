import React from 'react';
import PostService from '../../services/posts/PostService';

/**
 *
 * @returns {object} post object (posts and error)
 */
export const useFetchAllPost = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    setIsLoading(true);
    try {
      const { data } = await PostService.getAll();
      setPosts(data);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { isLoading, posts, error };
};

/**
 *
 * @param {*} postId  post id to get post.
 * @returns  {object} single post object (post and error).
 */
export const useFetchSinglePost = (postId) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [post, setPost] = React.useState([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    setIsLoading(true);
    try {
      const { data } = await PostService.get(postId);
      setPost(data);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { isLoading, post, error };
};
