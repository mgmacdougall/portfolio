# Portfolio

## Description

Personal Project Portfolio my main landing page for all my Personal Projects.
The current Applications included are:

1. Random Quote Generator - that displays random quotes
2. List Pagination and Filters - shows how to break down a large list into manageble page size. Includes a filtering feature.
3. Interactive Form - is an dynamic form is validated via basic JS validations, and the DOM is updated in real time based on the users selection.
4. Phrase Hunter - an interactive word guessing game.
5. Public API Request - demonstrates how to make a request to a 3rd party api, and create an interactive Employee Directory.
6. To Do Application - shows how to use local storage, the JS Node api, and updating the DOM in real time.

## Configure and Launch

1. Check and update dotenv file accordingly (see Configuration Notes below)
2. There are two start the server - development mode or regular mode. Below are the steps to do each:
   - Running in development mode:
     Run the following command from a terminal: `npm run start-dev`
     NOTE: This should be used for development purposes only as any changes will restart the server.
   - Running in live mode:
     Run the following command from a terminal: `npm start`
     NOTE: This should be used when going live with the server.

### Configuration notes

1. Rename the `sample.env` to `.env` at the root directory of the project.
   If you want, change the PORT value in the file but leave the DATASOURCE alone.
2. To start the application in live mode mode run the `npm run start` that will pick up the datasource setting in the dotenv.
3. To run the application in dev mode run the `npm run start-dev` that will pick up the datasource setting in the dotenv.
4. Set the PORT value in the dotenv if you want using the `PORT=<port number>`, otherwise it will default to port 3000.

## Notes for Exceed Requirements:

1. The `error.pug` and `page-not-found.pug` are for the 404 error and the other error requirements.
2. Running `npm run start` starts the server. Running `node app.js` starts the server.
3. Error handling in place to handle the page not found and the code exists for general server errors at the bottom of the routes.
4. The following CSS changes have been made:

- Layered box shadow on the cards on the index page.
- Gradient coloring added to the side panel
- Buttons rounded in the app + gradient coloring to match have been adde
- Scroll over the buttons changes the color to a solid light blue
- The text within the side panel (the `p` and the `a`) have been changed to white to display better.
