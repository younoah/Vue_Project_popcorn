const axios = require('axios');

const BASE_URL = 'https://www.omdbapi.com';
const API_KEY = '7035c60c';

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const { method, query } = options;

  const { data } = await axios({
    url: `${BASE_URL}?apikey=${API_KEY}&${query}`,
    method,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
