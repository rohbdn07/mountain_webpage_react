import axios from 'axios';
require('dotenv').config();

/**
 * @description: Http service for common http requests to the Strapi server.
 */
export default axios.create({
  baseURL: 'http://localhost:1337',
  headers: {
    'Content-type': 'application/json'
  }
});
