# deployed_url=

# User Management API

### This repository contains a simple Express.js API for managing user information using MongoDB as the database. The API includes CRUD (Create, Read, Update, Delete) operations for user data.

# Setup

    - Clone the Repository:
        - git clone <repository-url>
        - cd <repository-name>

# Install Dependencies:

    - npm install
    - Set Up Environment Variables:
    - Create a .env file in the root directory with the following content:
        - port=<your-port>
        - mongoURL=<your-mongodb-url>

# Run the Application:

    - npm run server

# User Model

### The user model is defined in the models/user.model.js file. It includes the following fields:

        - name (String, required)
        - role (String, required)
        - email (String, required)
        - phoneNumber (String, required)

# User Routes

## POST /user/add

- Adds a new user to the database.

`Request Body:
{
  "name": "John Doe",
  "role": "Admin",
  "email": "john.doe@example.com",
  "phoneNumber": "123-456-7890"
}`

## GET /user/

- Retrieves a list of all users from the database.

## GET /user/:id

- Retrieves details of a specific user by ID.

## DELETE /user/:id

- Deletes a user from the database by ID.

## PUT /user/:id

- Updates details of a user by ID.
