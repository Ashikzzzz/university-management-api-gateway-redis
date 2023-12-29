import express from 'express';
import { academicSemetserController } from './academicSemeter.controller';

const router = express.Router();

router.post('/', academicSemetserController.createAcademicSemester);

export const academicSemesterRoute = router;
