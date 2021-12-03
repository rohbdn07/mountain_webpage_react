import http from '../http-common';

/**
 *
 * @returns {Promise} - Promise with carousel data(images).
 */
const getAll = () => {
  return http.get('/services');
};

export default {
  getAll
};
