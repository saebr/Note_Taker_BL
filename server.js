const express = require('express');
const fs = require('fs');
const path = require('path');
const data = require('./db/db.json')

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// Sets up basic routes for user
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.get('/api/notes', (req, res) => {
    return res.json(data)
});

app.post('/api/notes', (req, res) => {
    const newData = data.push(req.body)
    fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => {
    if (err) throw err
    })
    return res.json(newData)
})

app.delete('/api/notes/:id', (req, res) => {
    var id = req.params.id
    var newData = data.filter(item => {
        console.log(item.id)
        console.log(id)
        return item.id != JSON.parse(id)
    })
    console.log(newData)
    fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => {
    if (err) throw err
    })
    return res.json(id)
}) 










//Starts Server to begin listening 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

