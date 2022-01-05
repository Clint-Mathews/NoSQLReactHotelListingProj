# Hotel Listing

Listing of Hotels using Astra NoSQL DB and react + netlify for FE and BE.

To Run the project  : netlify dev
Please install netlify globally using : npm i netlify -g

## Tech Stack
React,
Netlify,
Astra NoSQL DB 

## Env update needed
For the Application to work you need to create a local .env file and add Two keys :
<br />
ENDPOINT - which is the url endpoint to graphQL API from Astra
<br />
ASTRA_TOKEN - token generated for the API call to work
<br />
<br />
GraphQL is being used for API calls to make this work you will need to create a Database and schema in Astra. Create a collection and add hotel documents against it.
