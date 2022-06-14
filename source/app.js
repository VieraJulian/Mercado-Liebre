const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

const public = path.resolve(__dirname, '../public');

app.use(express.static(public));

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, 'views/home.html')));

app.get("/register", (req, res) => res.sendFile(path.resolve(__dirname, 'views/register.html')));

app.get("/login", (req, res) => res.sendFile(path.resolve(__dirname, 'views/login.html')));