#TODO Application


A simple and standard TODO application built to test my custom NPM package for validation.
This project includes user authentication, todo creation, updating, and fetching.

🚀 API Endpoints
Auth
Method	Endpoint	Description
POST	/auth/signup	Create a new user
POST	/auth/login	Login existing user
GET	/auth/me	Get current logged-in user

Todos
Method	Endpoint	Description
POST	/todo/todos	Create a new todo
GET	/todo/todos	Get todos for the authenticated user
PATCH	/todo/:todoId/done	Mark a todo as done

🎯 Motive

The main purpose of this project is to test and validate my own NPM package.
The package works as intended and handles validation inside the application.


📥 Installation
git clone <repo-url>
cd todo-application
npm install
npm run dev


📦 My NPM Package (Validation)

“This package helps in validating user data and request bodies.”

npm i @ayushsyal/common



