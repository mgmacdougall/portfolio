# Portfolio

Personal Project Portfolio

## Config notes:

1. Create a .env file at the root of the directory
   place the location of the data file to be used (i.e. DATASOURCE='data/project.json').
2. To start the application in live mode mode run the `npm run start` that will pick up the datasource setting in the dotenv.
3. To run the application in dev mode run the `npm run start-dev` that will pick up the datasource setting in the dotenv.
4. Set the PORT value in the dotenv if you want using the `PORT=<port number>`, otherwise it will default to port 3000.

## Other notes:

1. There is a basic morgan logger set to simple `tiny` for the purposes of this project.
