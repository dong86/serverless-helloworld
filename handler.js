'use strict';

module.exports.hello = async(event, context) => {
  console.log(event);
  const { message } = event.pathParameters;
  const result = {
    statusCode: 200,
    body: JSON.stringify(
      { message },
      null,
      2
    ),
  };

  return result;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
