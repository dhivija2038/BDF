
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const openDatabase = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());

// Home Route - For Chrome Browser
app.get('/', (req, res) => {
    res.send('Lab 04 Backend Server is Running Successfully!');
});

let db;

const initializeServer = async () => {
    db = await openDatabase();

    // User Registration
    app.post('/register/', async (req, res) => {
        const { username, name, password } = req.body;

        if (!username || !name || !password) {
            return res.status(400).send('All fields are required');
        }

        const existingUser = await db.get(
            'SELECT * FROM users WHERE username = ?',
            [username]
        );

        if (existingUser) {
            return res.status(400).send('Username already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.run(
            'INSERT INTO users (username, name, password) VALUES (?, ?, ?)',
            [username, name, hashedPassword]
        );

        res.status(200).send('User registered successfully');
    });

    // User Login
    app.post('/login/', async (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }

        const user = await db.get(
            'SELECT * FROM users WHERE username = ?',
            [username]
        );

        if (!user) {
            return res.status(400).send('Invalid user');
        }

        const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordMatched) {
            return res.status(400).send('Invalid password');
        }

        const jwtToken = jwt.sign(
            { username: username },
            JWT_SECRET
        );

        res.status(200).send({ jwt_token: jwtToken });
    });

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });
};

initializeServer().catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});
