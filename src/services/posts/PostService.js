import http from '../http-common';
import PropTypes from 'prop-types';

/**
 *
 * @returns {Promise} - Promise with all posts
 */
const getAll = () => {
  return http.get('/posts');
};

/**
 *
 * @param {*} id  - id of the post
 * @returns {Promise} - Promise with the specific post
 */
const get = (id) => {
  return http.get(`/posts/${id}`);
};

getAll.propTypes = {
  id: PropTypes.number.isRequired
};

export default {
  getAll,
  get
};
