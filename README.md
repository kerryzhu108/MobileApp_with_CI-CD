# CSC301 Assignment 1
This app has been built using a React Native frontend and a Node backend with Express.js.

## Running the App
Note: This app has been built and tested to run on Android devices.
1. Install the Expo Go app on your device.
2. Visit the following [Expo link](https://expo.dev/@kerryzhu/frontend) to run the application.
3. The discount code is "MAMAMIA"
4. App images may take a bit to load the first time due to server booting up from idle

## REST API Documentation and Testing
- The REST API is accessible from [https://aqueous-eyrie-35955.herokuapp.com](https://aqueous-eyrie-35955.herokuapp.com) and can be tested using Postman or similar applications.
- Documentation for the REST API built with Node and Express can be found in the backend [README.md](backend/README.md).

## CI/CD
- Tests are ran whenever we push/merge to the Development or Production
- Merging from Development to Production will redeploy the backend to Heroku and update the frontend on Expo (may need reopen)