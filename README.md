
<!-- RUN APP -->
Add this to .env and change accordingly:

REACT_APP_BACKEND = "http://localhost:5000"

npm start
Open [http://localhost:3000] to view it in your browser.

For docker:

docker compose --build 
docker compose up

<!-- REGENERATE graphql.ts -->
npm run gen
Use this command if any changes were made to the files in graphql folder.

