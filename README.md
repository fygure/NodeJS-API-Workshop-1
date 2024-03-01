# NodeJS-Workshop-1
This project is designed as a starting point for the NodeJS workshop aimed at introducing participants to building and testing APIs using NodeJS, Express, and external API integration. By the end of this workshop, participants will have a basic API that can query external services and serve data, which can be tested using tools like Insomnia or Postman.

## Prerequisites
Before you begin, ensure you have installed the following:
- NodeJS (v14.x or above)
- npm (comes with NodeJS)
- Git
- A code editor (e.g., Visual Studio Code, Atom, Sublime Text)

## Setup Instructions
1. **Clone the Repository**
   - Open a terminal or command prompt.
   - Run `git clone https://github.com/fygure/NodeJS-Workshop-1.git`
   - Navigate into the project directory: `cd NodeJS-Workshop-1`
  
2. **Install Dependencies**
   - Inside the project directory, run `npm install` to install the required npm packages.
   - This reads the dependencies from the package.json file and installs them into a node_modules folder.
  
3. **Environment Configuration**
   - If your project requires environment variables, add a `.env` file to the root of your project and populate it as necessary (e.g., `PORT=3001`).

## Running the Application
1. **Change the Port Number** (if necessary)
   - Open the `server.js` file in your code editor.
   - Locate the line where the port number is defined, e.g., `const PORT = process.env.PORT || 3001;`.
   - Change `3001` to the unique port number assigned to you for this workshop.

2. **Start the Server**
   - Run `npm start` in the terminal from the root directory of your project.
   - If everything is set up correctly, you should see a message like `Server is running on port XXXX`, indicating the server has started.

## Testing the API
To test your API, you can use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/):
- Launch Postman/Insomnia.
- Create a new request to test the endpoints you've developed. For example, if you have a GET endpoint at `/api/data`, you would send a GET request to `http://localhost:XXXX/api/data`, replacing `XXXX` with your unique port number.
- When naming routes, best practice is to include a version number such as `/api/v1/<route_name>`.

## Workshop Content
- **Introduction to NodeJS and APIs**
- **Setting Up the Environment**
- **Understanding the Starter Code**
- **Building a Simple API with Express**
- **Querying an External API**
- **Avoiding Port Conflicts**
- **Testing the API with Insomnia or Postman**
- **Debugging and Troubleshooting**

## Troubleshooting
- **Port Already in Use**: Ensure the port number in your `.env` file or `server.js` is unique.
- **Dependencies Not Found**: Run `npm install` from the root of your project directory to install missing npm packages.

## Further Resources
- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Postman Learning Center](https://learning.postman.com/)
- [Insomnia Documentation](https://docs.insomnia.rest/)

## Questions?
If you have any questions or encounter issues, please reach out to the Max or other CougarCS Mentors after the workshop during Q&A time.

