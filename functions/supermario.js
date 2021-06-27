exports.handlers = async () => {
  console.log("function ran");

  const data = { name: "mario", age: 35, job: "plumber" };

  // return response to browser
  // upload this to netlify to get an api endpoint
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
