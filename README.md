# MEIN Template

This project serves as a template for applications built with MongoDB, ExpressJS, Ionic Cordova and NodeJS. The application is a simple todo list that has both client and server components. The client side is built using the Ionic framework and the server side is built on NodeJS, ExpressJS and MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- Install [NodeJS](https://nodejs.org/en/download/) and follow the instructions for your operating system.
- Install [MongoDB](https://www.mongodb.com/download-center#community) and follow the specific instructions.

### Installing

In order to begin using the client use the following commands to start the ionic project.
```
$ cd client
$ npm install
$ ionic serve
```

In order to begin using the api make sure Mongo is up and running on the default port and then use the following commands.

```
$ cd api
$ npm install
$ node server.js
```
