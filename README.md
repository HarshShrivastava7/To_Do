
# ToDo Website

This is a simple to-do web application with a backend built using Node.js and Express, a frontend using React, and MongoDB for the database.


## Features

- Add, update, and delete to-do items.
- Responsive user interface built with React.
- RESTful API for backend operations.


## Tech Stack

**Frontend:** React, R Suite

**Backend:** Node, Express

**Database:** MongoDB


## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/HarshShrivastava7/To_Do.git
cd To_Do
```

### 2. Install dependencies:

- For the backend:
```bash
cd server
npm install
```

- For the backend:
```bash
cd client
npm install
```
    
## Running the application 

### 1. Start the backend server:

 In the `server` directory, run:

```bash
  node server.js
```

This will start the backend server on the port 5000.

### 2. Start the frontend server:

 In the `client` directory, run:

```bash
  npm run start
```

This will start the React development server, usually accessible at `http://localhost:3000`.

## Configuration 

- Ensure MongoDB is running locally or provide a remote database connection string in your backend configuration.

- You can set up environment variables in a `.env` file in the `server` directory for database connections and other configurations.
## Usage

- Access the application in your web browser at `http://localhost:3000`.

- Use the interface to manage your to-do tasks, adding new tasks, marking them as complete, or deleting them as needed.

