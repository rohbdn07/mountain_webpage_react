import React from 'react';
import { useQuery } from 'react-query';
import FetchServicePost from '../../services/posts/FetchServicePost';

/**
 *
 * @returns  {ArrayOfObject} all posts array of objects (with error, data, isLoading)
 * due to use of React query.
 * For more info: Visit:https://react-query.tanstack.com/guides/query-functions.
 */
export const useFetchAllServicePost = () => {
  React.useEffect(() => {
    getServicePost();
  }, []);

  const getServicePost = () => {
    const allServicesData = useQuery(
      ['allServicesData'],
      async () => await FetchServicePost.getAll()
    );

    return {
      ...allServicesData
    };
  };
};

/**
 *
 * @param {*} postId  service's single post id.
 * @returns  {ArrayOfObject} single post array of object (with error, data, isLoading)
 * due to use of React query.
 * For more info: Visit:https://react-query.tanstack.com/guides/query-functions.
 */
export const useFetchSinglePost = (postId) => {
  React.useEffect(() => {
    getSingleServicePost();
  }, []);

  const getSingleServicePost = () => {
    const singleServicePost = useQuery(
      ['singleServicesData'],
      async () => await FetchServicePost.getSingle(postId)
    );

    return {
      ...singleServicePost
    };
  };
};
