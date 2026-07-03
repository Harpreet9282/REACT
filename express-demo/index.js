//const express =require('express');
import express from 'express';

const app = express();

app.get("/", (req, res)=>{
    //res.send('<h1>Hello World</h1>');
    res.json({
        name: 'Harpreet',
        age: 22,
        city: 'Delhi'
    });


});
app.listen(3000, ()=>{
    console.log('Server running');


});

app.get("/about", (req, res)=>{
    res.status(200).json({
        name: 'Harpreet',
        age: 22,
        city: 'Delhi'
    });
});