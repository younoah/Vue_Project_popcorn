exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'younoah',
      age: 27,
    }),
  };
};
