
const express = require('express');
const Joi = require('joi');
const app = express();
var cors = require('cors');
var chatData = require('./data/conversationMock.json');
app.use(cors())
app.use(express.json());

app.get('/api/conversation', (req, res) => {
    res.send(chatData);
})

app.get('/api/conversation/:id',(req,res) =>{
    if(!chatData.units.find(nextUnit => nextUnit.id == parseInt(req.params.id))) {//404 {
        res.status(400).send('The chatData for the given id not found');
    }
    else {
        res.send(chatData.units.find(nextUnit => nextUnit.id == parseInt(req.params.id)));
    }
});

app.post('/api/conversation/', (req, res) => {
    
    const chatItem = {
        id:chatData.units.length + 1,
        reply: req.body.response
    };
    chatData.units.push(chatItem);
    res.send(chatData);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on Port ${port}`))
