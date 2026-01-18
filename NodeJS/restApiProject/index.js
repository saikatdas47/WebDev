const express = require('express');
const app = express();
const port = 3000;
const users = require('./MOCK_DATA.json');



//route
app.get('/', (req, res) => {
    res.send('Hello World! This is my first REST API using Express.js');
});
app.get('/users', (req, res) => {
    const html = `<html>
   <head>
   <title>Users</title>
   </head>
   <body>
   <h1>List of Users</h1>
   <ul>
   ${users.map(user => `<li>${user.first_name} ${user.last_name} - ${user.email}</li>`).join('')}
   </ul>
   </body>
   </html>`;
    res.send(html);
});
app.get('/home', (req, res) => {
    res.send('Hello World! HOME');
});

//rest api to get users data in json format
app.get('/api/users', (req, res) => {
    res.json(users);
});
app.get('/api/users/:idd', (req, res) => {
    const userId = parseInt(req.params.idd); // Convert id from string to integer
    const user = users.find(u => u.id === userId); // Find user by id in Mock_data.json er array data[jekhane onek alada object ache] theke u.id akta object nibe 
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});
app.put('/api/users/:idd', (req, res) => {
    //TODO: Update user logic here
    res.json({ message: `User with id ${req.params.idd} updated successfully` });
});
app.patch('/api/users/:idd', (req, res) => {
    //TODO: Partially update user logic here
    res.json({ message: `User with id ${req.params.idd} partially updated successfully` });
});
app.delete('/api/users/:idd', (req, res) => {
    //TODO: Delete user logic here
    res.json({ message: `User with id ${req.params.idd} deleted successfully` });
});



//server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});