// import sampleJson from './data/conversationMock.json';

const express = require('express');
const Joi = require('joi');
const app = express();
var cors = require('cors');
var sampleJson = require('./data/conversationMock.json');
app.use(cors())
app.use(express.json());

const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]
app.get('/', (req, res) => {
    res.send('hello world sdfdsfsfd')
});

app.get('/api/conversation', (req, res) => {
    res.send(sampleJson);
})

app.get('/api/conversation/:id',(req,res) =>{
    const course = courses.find(c => c.id == parseInt(req.params.id));
    console.log(course)
    if(!course) {//404 {
        res.status(400).send('The course for the given id not found');
    }
    else {
        res.send(course);
    }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on Port ${port}`))
