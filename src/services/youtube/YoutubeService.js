import http from '../http-common';

/**
 * @description - It only shows youtube video on the client screen
 * only if youtube video is embeded in the strapi page.
 * @returns {Promise} - Promise with the response of the
 * request to the youtube api.
 */
const get = () => {
  return http.get('/youtube');
};

export default {
  get
};
