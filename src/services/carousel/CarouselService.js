import http from '../http-common';

/**
 *
 * @returns {Promise} - Promise with carousel data(images).
 */
const getAll = () => {
  return http.get('/herobanners');
};

export default {
  getAll
};
