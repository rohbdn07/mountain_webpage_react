import http from '../http-common';

/**
 *
 * @returns {Promise} - Promise that returns all service's posts data.
 */
const getAll = () => {
  return http.get('/services');
};

/**
 *@param {number} id - Service's post id.
 * @returns {Promise} - Promise that returns single service's post data
 * that matches with params id.
 */
const getSingle = (postId) => {
  return http.get(`/services/${postId}`);
};

export default {
  getAll,
  getSingle
};
