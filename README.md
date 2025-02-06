I’m Bored App

The “I’m Bored” app is a fun and interactive web application that helps users find random activities to do based on their preferences. Users can select the type of activity (e.g., education, charity, relaxation) and the number of participants, and the app will suggest a fun activity.

The app is built using Node.js, Express, and EJS, and utilizes the Axios library to interact with a third-party API to fetch activities.

Features
	•	Users can choose from different types of activities.
	•	Select the number of participants for the activity.
	•	The app fetches a random activity from an API based on the user’s selection.
	•	Displays the activity, its type, and the number of participants required.
	•	Displays error messages when there is an issue fetching data from the API.

Tech Stack
	•	Node.js: JavaScript runtime used to run the server.
	•	Express: Web framework for handling HTTP requests.
	•	Axios: Promise-based HTTP client to interact with APIs.
	•	EJS: Templating engine to render dynamic content in HTML.

Installation
	1.	Clone the repository to your local machine:

git clone https://github.com/yourusername/im-bored-app.git


	2.	Navigate to the project directory:

cd im-bored-app


	3.	Install the required dependencies:

npm install


	4.	Start the development server:

npm start


	5.	Visit the app in your browser at http://localhost:3000.

Usage
	1.	On the homepage, you can select the type of activity you’re interested in (education, relaxation, etc.) from the dropdown menu.
	2.	You can also specify how many participants will be involved in the activity.
	3.	Once the form is submitted, the app will show a random activity that fits the criteria.
	4.	If there’s an error fetching data from the API, an error message will be displayed on the page.

API Used

This app interacts with the Bored API (http://bored.api.lewagon.com) to fetch random activities. The API allows filtering activities based on type and the number of participants.
