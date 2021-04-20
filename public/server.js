const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up basic routes for user
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));












//Starts Server to begin listening 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));