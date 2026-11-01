# Lab 2: SQLite Database and CRUD Routes

## Student Details

- **Name:** N DHIVIJA
- **Registration Number:** 252U1R6112
- **Section:** AIML-2B-207
- **Course:** Backend Development Fundamentals
- **University:** Aurora Deemed to be University

## Live Deployment

**Render Deployment URL:** https://bdf-lab-02-oujw.onrender.com

The application is deployed successfully on Render.

### Live API Endpoints

- **GET All Books:** https://bdf-lab-02-oujw.onrender.com/books/
- **GET Single Book:** https://bdf-lab-02-oujw.onrender.com/books/1/

The remaining POST, PUT and DELETE endpoints can be tested using Postman.

## Objective

To connect an Express.js server with an SQLite database and implement CRUD (Create, Read, Update, Delete) operations through REST API endpoints. This lab demonstrates how to perform database operations using asynchronous functions and parameterized SQL queries.

## Technologies Used

- Node.js
- Express.js
- SQLite
- sqlite3
- sqlite
- Nodemon
- Postman
- Render

## Database Details

**Database File:** `books.db`

**Table Name:** `book`

The database contains the following columns:

| Column | Data Type |
|---|---|
| id | INTEGER PRIMARY KEY |
| title | TEXT |
| author | TEXT |
| price | INTEGER |
| pages | INTEGER |

A total of 10 sample book records were inserted into the database using the SQLite CLI.

## Project Structure

```text
lab-02/
│
├── screenshots/
│   ├── database-view.png
│   ├── get-all-books.png
│   ├── get-single-book.png
│   ├── post-book.png
│   ├── put-book.png
│   ├── delete-book.png
│   └── error-book.png
│
├── books.db
├── database.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation and Execution

### 1. Clone the Repository

```bash
git clone https://github.com/dhivija2038/BDF.git
```

### 2. Navigate to the Lab Folder

```bash
cd BDF/lab-02
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The server runs at:

```text
http://localhost:3000
```

**Environment Variables:** No additional environment variables are required.

## API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/books/` | Retrieves all books from the database. |
| GET | `/books/:bookId/` | Retrieves a specific book using its ID. |
| POST | `/books/` | Adds a new book to the database. |
| PUT | `/books/:bookId/` | Updates an existing book using its ID. |
| DELETE | `/books/:bookId/` | Deletes a book using its ID. |

## Testing

All five CRUD endpoints were tested using Postman.

- GET requests were used to retrieve all books and individual book details.
- POST was used to insert a new book.
- PUT was used to update an existing book.
- DELETE was used to remove a book.
- Invalid book IDs were tested to verify the error response.

The database was also checked using the SQLite CLI to verify the records.

## Screenshots

### 1. Database View

![Database View](screenshots/database-view.png)

### 2. GET All Books

![GET All Books](screenshots/get-all-books.png)

### 3. GET Single Book

![GET Single Book](screenshots/get-single-book.png)

### 4. POST Book

![POST Book](screenshots/post-book.png)

### 5. PUT Book

![PUT Book](screenshots/put-book.png)

### 6. DELETE Book

![DELETE Book](screenshots/delete-book.png)

### 7. Error Handling

![Error Handling](screenshots/error-book.png)

## Key Learnings

- Connecting an Express.js application to an SQLite database.
- Creating and managing database tables.
- Performing CRUD operations using SQL queries.
- Using asynchronous functions with `async` and `await`.
- Using parameterized queries with `?` placeholders to prevent SQL injection.
- Handling invalid book IDs with appropriate HTTP status codes.
- Testing REST API endpoints using Postman.
- Deploying a Node.js application using Render.

## Conclusion

Through this lab, I learned how to integrate an SQLite database with an Express.js server and implement all five CRUD operations. I gained practical experience in writing SQL queries, handling asynchronous database operations, using parameterized queries, testing APIs with Postman, and deploying a backend application on Render.