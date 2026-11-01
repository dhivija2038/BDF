const express = require('express');
const openDatabase = require('./database');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

let db;

const initializeDBAndServer = async () => {
    try {
        db = await openDatabase();

        app.listen(PORT, () => {
            console.log(`Server Running at http://localhost:${PORT}/`);
        });
    } catch (error) {
        console.log(`DB Error: ${error.message}`);
        process.exit(1);
    }
};

// GET: Retrieve all books
app.get('/books/', async (request, response) => {
    const books = await db.all('SELECT * FROM book');
    response.status(200).send(books);
});

// GET: Retrieve a book by ID
app.get('/books/:bookId/', async (request, response) => {
    const { bookId } = request.params;

    const book = await db.get(
        'SELECT * FROM book WHERE id = ?',
        [bookId]
    );

    if (book === undefined) {
        response.status(404).send({ message: 'Book not found' });
    } else {
        response.status(200).send(book);
    }
});

// POST: Add a new book
app.post('/books/', async (request, response) => {
    const { title, author, price, pages } = request.body;

    const result = await db.run(
        'INSERT INTO book (title, author, price, pages) VALUES (?, ?, ?, ?)',
        [title, author, price, pages]
    );

    response.status(201).send({
        bookId: result.lastID,
        message: 'Book added successfully'
    });
});

// PUT: Update an existing book
app.put('/books/:bookId/', async (request, response) => {
    const { bookId } = request.params;
    const { title, author, price, pages } = request.body;

    const result = await db.run(
        'UPDATE book SET title = ?, author = ?, price = ?, pages = ? WHERE id = ?',
        [title, author, price, pages, bookId]
    );

    if (result.changes === 0) {
        response.status(404).send({ message: 'Book not found' });
    } else {
        response.status(200).send({ message: 'Book updated successfully' });
    }
});

// DELETE: Remove a book
app.delete('/books/:bookId/', async (request, response) => {
    const { bookId } = request.params;

    const result = await db.run(
        'DELETE FROM book WHERE id = ?',
        [bookId]
    );

    if (result.changes === 0) {
        response.status(404).send({ message: 'Book not found' });
    } else {
        response.status(200).send({ message: 'Book deleted successfully' });
    }
});

// Initialize database and start server
initializeDBAndServer();