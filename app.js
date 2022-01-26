const express = require('express');
const path = require('path');
const app = express();

//const publicPath = path.resolve(__dirname, './public');
// app.use( express.static(publicPath));
//app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});
