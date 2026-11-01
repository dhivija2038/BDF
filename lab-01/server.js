const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to my server!');
});

app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'N DHIVIJA',
        section: 'AIML-2B-207'
    });
});

app.get('/time', (req, res) => {
    res.status(200).send(new Date().toString());
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(3000, () => {
    console.log('Express server running on port 3000');
});