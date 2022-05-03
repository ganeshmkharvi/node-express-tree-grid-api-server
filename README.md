 <p align="center">
  <h3 align="center">Backend for Angular Syncfusion tree grid</h3>
  <p align="center">
    <a href="https://github.com/ganeshmkharvi/node-express-tree-grid-api-server/issues">Report Bug </a>
    ·
    <a href="https://github.com/ganeshmkharvi/node-express-tree-grid-api-server/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

### What's inside this repo?

- Express Server configured to accept JSON request.
- Apis to create services, checkouts and retrieve services.
- Production standard structuring of the application.
- High SoC (feature based).
- Postman collection.
- Socket.io for real time updates.

#### Task description

This project gives you the required apis for getting tree data,  deleting tree task, subtask. It also gives real time updates whenever any delete api is called even from postman. You will get all the details in the postman collection inside this repo. 

The client application using this api server can be found at: 
<a href="https://github.com/ganeshmkharvi/angular-tree-grid-portal">Angular tree grid portal</a>

### Built With

- [Node.js]() - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js]() - Minimal and flexible Node.js web application framework.
- [Socket.io]() - Event driven JavaScript library for real time web applications.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps :

### Prerequisites

To run this project, you'll need to have the following installed:

- Node.js : [https://nodejs.org](https://nodejs.org)

- npm :
  ```sh
  npm install npm@latest -g
  ```
 <br>

### Installation

1. Clone the repo :
   ```sh
   git clone https://github.com/ganeshmkharvi/node-express-tree-grid-api-server.git
   ```
2. Install dependencies (use `sudo` if required) :

   ```sh
   npm install
   ```

3. Create `.env` file and configure :

   ```JS
   PORT = <PORT>
   
4. Start the server :
   ```sh
   npm start
   ```
   

