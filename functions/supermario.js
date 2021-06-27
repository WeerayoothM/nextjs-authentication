exports.handler = async () => {
  console.log("function ran");

  const data = { name: "mario", age: 35, job: "plumber" };

  // return response to browser
  // upload this to netlify to get an api endpoint
  // use netlify cli to spinup a proxy server at port 8888 ( run netlify dev)
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
