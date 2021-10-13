require('dotenv').config();
const axios = require('axios');

const { BASE_URL, API_KEY } = process.env;

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
