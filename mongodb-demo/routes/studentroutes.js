import {addStudents} from "../controllers/studentController.js";
import express from 'express';
const router = express.Router();
router.post("/add-student", addStudents);
export default router;