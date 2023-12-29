import express from 'express';
import { academicSemetserController } from './academicSemeter.controller';

const router = express.Router();
// get
router.get('/', academicSemetserController.getAllAcademicSemester);

// create
router.post('/', academicSemetserController.createAcademicSemester);

export const academicSemesterRoute = router;
