import Student from "../models/student.js";

export const addStudents = async (req, res) => {
    const student=await Student.create(req.body);
    res.json({
        message: "Student added successfully",
        student
    });
}