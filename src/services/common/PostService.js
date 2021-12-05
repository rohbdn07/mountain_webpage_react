import http from '../http-common';
import PropTypes from 'prop-types';

/**
 *
 * @returns {Promise} - Promise that returns the response from the server.
 */
const post = (apiEndPoint, objectToSend) => {
  return http.post(apiEndPoint, objectToSend);
};

post.propTypes = {
  apiEndPoint: PropTypes.string.isRequired,
  objectToSend: PropTypes.object.isRequired
};

export default {
  post
};
