
require('dotenv').config()
const express = require('express');
// console.log(process.env)
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('helloworld')
})

app.get('/login', (req,res) => {
   res.send('login done') 
})

app.listen(process.env.PORT, () => {

    console.log(`example app listening on port ${port}`);

});