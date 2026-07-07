//const express =require('express');
import express from "express";

let app = express();

app.use(express.json());

let students = [
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
    //students.push({id: 3, name: "Rohit", age: 24, city: "Chennai", school: "DAV"});
    students.push(req.body);
  res.json({
    message: "Student added successfully",
    students
  });
});

app.listen(3000, () => {
  console.log("Server running");
});

app.put("/students/:id",(req,res)=>{
  let studentId=Number(req.params.id);
  let Index = students.findIndex((s)=>s.id===studentId);
  students[Index] = req.body;
  res.json({
    message:"student updated successfully",students
  })
})

app.delete("/students/:id",(req,res)=>{
    let studentId=Number(req.params.id);

 let new_students = students.filter((s)=>s.id!==studentId);
 students=new_students;
 res.json({
   message:"student deleted successfully",students,
 });
});