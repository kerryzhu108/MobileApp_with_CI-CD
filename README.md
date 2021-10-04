# CSC301 Assignment 1
This app has been built using a React Native frontend and a Node backend with Express.js. "Development" is our "Main" branch.

## Running the App
Note: This app has been built and tested to run on Android devices.
1. Install the Expo Go app on your device.
2. Visit the following [Expo link](https://expo.dev/@kerryzhu/frontend) and scan the QR code with Expo to open the app.
3. Further instructions provided in-app.
4. The discount code is "MAMAMIA"

## REST API Documentation and Testing
- The REST API is accessible from [https://aqueous-eyrie-35955.herokuapp.com](https://aqueous-eyrie-35955.herokuapp.com) and can be tested using Postman or similar applications.
- Documentation for the REST API built with Node and Express can be found in the backend [README.md](backend/README.md).

## CI/CD
- Tests are ran whenever we push/merge to the Development or Production
- To deploy backend and frontend, push to Production branch or merge Development branch into Production on Github. 
- The build jobs in config.yml are set to only run on the Production branch. After the deploy is done, reopen app on expo to see changes
![alt text](https://i.ibb.co/qxtvjyv/abc.jpg)