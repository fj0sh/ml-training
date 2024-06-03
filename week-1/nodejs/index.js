const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs');
const PORT = 3000;

app.use(bodyParser.json())

let users = [];

fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        users = JSON.parse(data);
    } catch (err) {
        console.error('Error parsing JSON:', err);
    }

    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
});

function write(result, res, status = 200){
    fs.writeFile('./data.json', JSON.stringify(users, null, 2), (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).send({ message: 'Error saving user' });
    }

    res.status(status).send(result);
});}


app.get('/users', (req, res) => {
    res.status(200).send(users);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id == userId);
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(400).send({ message: 'User not found' });
    }
});

app.post("/users",(req,res) => {
    const newUser = req.body;
    users.push(newUser);
    write(newUser,res,201)
})

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(u => u.id == userId);

    if (userIndex === -1) {
        return res.status(400).send({ message: 'User not found' });
    }

    users.splice(userIndex, 1);

    write({ message: 'User deleted successfully' }, res, 201)
});

app.put('/users/:id', (req, res) => {
    const updatedInfo = req.body
    const userId = req.params.id;
    const userIndex = users.findIndex(u => u.id == userId);

    if (userIndex === -1) {
        return res.status(404).send({ message: 'User not found'});
    } 
    
    users[userIndex] = updatedInfo    


    write(users[userIndex], res, 201)
    
});
