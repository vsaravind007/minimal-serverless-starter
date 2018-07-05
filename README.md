
# minimal-serverless-starter
A minimal Serverless starter template for AWS Lambda. 

**Why?**

Building a RESTful API service in Serverless framework is quite simple, it is supposed to trim down development & dev ops time. However the problem lies with the initial setup of things that could be a bit of a task for first timers. This starter template is aimed at first time Serverless implementers who are looking for a taste of the awesome Serverless framework! This Serverless project has 2 API endpoints, 1 get handler & 1 post handler & also demonstrates how environment variables & deployment stages are implemented in Serverless.

**Folder Structure**
```
.
├── README.md
├── handler.js
├── package.json
├── serverless.env.yml
└── serverless.yml
```
Below are the files you should be interested in:

``handler.js`` - This is where the API handler codes reside.

``serverless.env.yml`` - This is where you define your ENV variables

``serverless.yml`` - The main serverless definitions file where you define your API endpoints

**How to Deploy?**

1.  [Install Serverless](https://serverless.com/framework/docs/providers/aws/guide/installation/) & setup the AWS Credentials, [click here](https://serverless.com/framework/docs/providers/aws/guide/credentials/) to know how to do that
2.  Clone this repo
3.  Run ``$ npm install`` inside the directory
4.  Deploy your API by running ``$ serverless deploy -s dev’`` inside the directory to deploy it to the ‘dev’ stage.
