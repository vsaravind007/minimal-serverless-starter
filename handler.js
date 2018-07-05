/**
 *
 * handler.js
 * Handler functions for the serverless service 'minimal-serverless-starter'
 *
 */


//Helper function to generate response in the format expected by AWS Lambda
function generateResponse(statusCode, message, callback) {
    callback(null, {
        statusCode: statusCode,
        body: JSON.stringify(message)
    })
}

module.exports.getHandler = function(event, context, callback) {
    console.log('We got a hit in getHandler!');
    //Lets try printing the environment variable we set earlier in the serverless.env.yml file
    console.log('Value of env variable VARIABLE for the stage is ', process.env.VARIABLE);
    let response = {
        message: 'Hello world from minimal-serverless-starter!',
        env_variable: process.env.VARIABLE,
        timeStamp: new Date()
    };
    return generateResponse(200, response, callback)
}


module.exports.postHandler = function(event, context, callback) {
    console.log('We got a hit in postHandler!');
    //Lets try printing the request body here
    let reqBody = event.body;
    console.log('Request body -> ', event.body);
    //Lets try parsing the request body to JSON
    try {
        reqBody = JSON.parse(reqBody)
    } catch (e) {
        console.log('Not a parsable body!')
    }
    //Lets return the response
    let response = {
        message: 'Hello world from minimal-serverless-starter!',
        env_variable: process.env.VARIABLE,
        timeStamp: new Date(),
        reqBody: reqBody
    };
    return generateResponse(200, response, callback)
}