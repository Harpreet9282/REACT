//const express =require('express');
import express from "express";

const app = express();

app.use(express.json());

const students = [
  {
    id: 1,
    name: "Harpreet",
    age: 22,
    city: "Delhi",
    school: "DAV",
  },
  {
    id: 2,
    name: "Rahul",
    age: 23,
    city: "Mumbai",
    school: "St. John",
  },
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
    students.push({id: 3, name: "Rohit", age: 24, city: "Chennai", school: "DAV"});
  res.json({message: "Student added successfully",students});
});

app.listen(3000, () => {
  console.log("Server running");
});
